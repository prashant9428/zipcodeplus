import rp from "request-promise";
import config from "../../config/mapping";

/**
 *
 * @param zipcode
 * @returns
 */
function getUsaZipcode(zipcode: string | number) {
  return new Promise(function (resolve, reject) {
    const options = {
      uri: `${config.zipcodeUrl}`,
      body: {
        "countrycode": "US",
        "zip": zipcode
      },
      method: "POST",
      json: true, // Automatically parses the JSON string in the response
    };

    rp(options)
      .then(function (zipcode: object) {
        resolve(zipcode);
      })
      .catch(function (err: any) {
        // API call failed...
        reject(err);
      });
  });
}

export { getUsaZipcode };
