interface Config {
  countries: Object[];
  log: { NOT_AVAILABLE: string; INVALID: string , NOT_FOUND:string};
  status:{INVALID_REQUEST: number, SUCCESS: number, NOT_FOUND: number},
  IndianPincodeUrl: string;
  zipcodeUrl: string;
}

const config: Config = {
  countries: [
    {
      code: "US",
      pattern: /^\d{5}(-\d{4})?$/,
    },
    {
      code: "UK",
      pattern: /^[A-Z]{1,2}\d[A-Z\d]? \d[ABD-HJLNP-UW-Z]{2}$/i,
    },
    {
      code: "AU",
      pattern: /^\d{4}$/,
    },
    {
      code: "CA",
      pattern:
        /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i,
    },
    {
      code: "IN",
      pattern: /^\d{6}$/,
    },
  ],
  log: {
    NOT_AVAILABLE: "INVALID COUNTRY",
    INVALID: "INVALID ZIPCODE",
    NOT_FOUND: "NOT FOUND"
  },
  status:{
    "INVALID_REQUEST": 400,
    "SUCCESS":200,
    "NOT_FOUND":404

  },
  IndianPincodeUrl: "https://api.postalpincode.in/pincode/",
  zipcodeUrl: "https://o8ld2ofl6d.execute-api.ap-south-1.amazonaws.com/v1/zipcode"
};

export default config;
