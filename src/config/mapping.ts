interface Config {
  countries: Object[];
  log: { NOT_AVAILABLE: string; INVALID: string };
  pincodeUrl: string;
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
    NOT_AVAILABLE: "country code is currenlty not available.",
    INVALID: "Provide pincode is invalid.",
  },
  pincodeUrl: "https://api.postalpincode.in/pincode/",
};

export default config;
