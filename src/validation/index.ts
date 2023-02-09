import config from "../config/mapping";
import findKey from "lodash/findKey";

/**
 *
 * @param countryCode
 * @param zipcode
 * @returns
 */

function isValidZipcode(
  countryCode: string,
  zipcode: string | number
): boolean {
  // check if pincode is present in country config
  const isCountry: any = findKey(config.countries, ["code", countryCode]);
  if (!isCountry) {
    throw new Error(`${countryCode} ${config.log.NOT_AVAILABLE}.`);
  }
  const country: any = config.countries[isCountry];
  // Regular expression pattern to match zipcodes
  const pattern = country["pattern"];
  // Check if the zipcode matches the pattern
  return pattern.test(zipcode);
}

/**
 * 
 * @param countryCode 
 * @returns 
 */
function isValidCountry(countryCode: string): boolean {
  // check if pincode is present in country config
  const isCountry: any = findKey(config.countries, ["code", countryCode]);
  if (!isCountry) {
   return false
  }
  return true;
}

export default {
  isValidZipcode,
  isValidCountry
};
