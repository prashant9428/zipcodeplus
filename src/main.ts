import validation from "./validation";
import config from "./config/mapping";
import { getIndianPincodes } from "./service/IN";

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
    if (!validation.isValidCountry(countryCode)) {
      throw new Error(`${countryCode} ${config.log.NOT_AVAILABLE}.`);
    }
    if (!validation.isValidZipcode(countryCode, zip)) {
      throw new Error(`${countryCode} ${config.log.INVALID}.`);
    }
    const zipDetails:any =  await getIndianPincodes(zip);

    if(zipDetails[0].Status != "Success") {
      return null
    }
    
    return zipDetails[0]["PostOffice"][0]
  } catch (error) {
    return error;
  }
}

export { isValidZipcode, zipcode };
