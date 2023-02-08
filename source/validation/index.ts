import config from "../config/mapping";
import _ from 'lodash'

/**
 * 
 * @param countryCode 
 * @param zipcode 
 * @returns 
 */

function isValidZipcode(countryCode: string, zipcode: string| number): boolean {
    // check if pincode is present in country config
    const isCountry: any = _.findKey(config.countries,["code", countryCode])
    if(!isCountry){
        throw new Error(`${countryCode} ${config.log.NOT_AVAILABLE}.`)
    }
    const country:any = config.countries[isCountry]
    // Regular expression pattern to match zipcodes
    const pattern = country['pattern']
    // Check if the zipcode matches the pattern
    return pattern.test(zipcode);
}

export default {
    isValidZipcode
}