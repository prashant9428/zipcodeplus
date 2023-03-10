import rp from "request-promise";
import config from "../../config/mapping";

/**
 *
 * @param zipcode
 * @returns
 */
function getIndianPincodes(zipcode: string | number) {
  return new Promise(function (resolve, reject) {
    const options = {
      uri: `${config.IndianPincodeUrl}/${zipcode}`,
      json: true, // Automatically parses the JSON string in the response
    };

    rp(options)
      .then(function (pincode: object) {
        resolve(pincode);
      })
      .catch(function (err: any) {
        // API call failed...
        reject(err);
      });
  });
}

export { getIndianPincodes };
