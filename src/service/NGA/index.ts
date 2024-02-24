import rp from "request-promise";
import config from "../../config/mapping";

/**
 *
 * @param zipcode
 * @returns
 */
function getNigeriaPincodes(zipcode: string | number) {
  return new Promise((resolve, reject) => {
    const options = {
      uri: `${config.NigeriaPincodeUrl}/${zipcode}`,
      json: true, // Automatically parses the JSON string in the response
    };

    rp(options)
      .then((pincode: object) => {
        resolve(pincode);
      })
      .catch((err: any) => {
        // API call failed...
        reject(err);
      });
  });
}

export default getNigeriaPincodes;
