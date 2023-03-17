import validation from "./validation";
import config from "./config/mapping";
import getIndianPincodes from "./service/IN";
import getUsaZipcode from "./service/US";
import getNigeriaPincodes from "./service/NGA";
import { success, failed } from "./response";
/**
 *
 * @param countryCode
 * @param zip
 * @returns
 */
function isValidZipcode(countryCode: string, zip: number | string): boolean {
  try {
    return validation.isValidZipcode(countryCode, zip);
  } catch (error: any) {
    return error;
  }
}

/**
 *
 * @param countryCode
 * @param zip
 * @returns
 */
async function zipcode(countryCode: string, zip: number | string) {
  try {
    if (!validation.isValidCountry(countryCode))
      return failed(
        config.status.INVALID_REQUEST,
        `${config.log.NOT_AVAILABLE}`
      );

    if (!validation.isValidZipcode(countryCode, zip))
      return failed(config.status.INVALID_REQUEST, `${config.log.INVALID}`);

    switch (countryCode) {
      case "IN":
        const inZipDetails: any = await getIndianPincodes(zip);
        if (inZipDetails[0].Status != "Success")
          return success(config.status.NOT_FOUND, null);

        return success(config.status.SUCCESS, inZipDetails[0]["PostOffice"][0]);
        break;
      case "US":
        const usZipDetails: any = await getUsaZipcode(zip);
        if (usZipDetails.statusId != "1")
          return success(config.status.NOT_FOUND, null);
        return success(config.status.SUCCESS, usZipDetails.resbody);
        break;
      case "NGA":
        const ngZipDetails: any = await getNigeriaPincodes(zip);
        if (ngZipDetails.Status != "Success")
          return success(config.status.NOT_FOUND, null);

        return success(config.status.SUCCESS, ngZipDetails.PostalCode);
        break;
      default:
        return success(config.status.NOT_FOUND, null);
        break;
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export { isValidZipcode, zipcode };
