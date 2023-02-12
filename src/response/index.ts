/**
 *
 * @param statusId
 * @param message
 * @returns
 */

const success = (statusId: number, message: string | Object | number | any) => ({
  status: statusId,
  message: "success",
  zip: message,
});

/**
 *
 * @param {*} statusId
 * @param {*} message
 * @returns
 */
const failed = (statusId: number, message: string | Object | number) => ({
  status: statusId || 0,
  message: message,
  zip: null,
});

export { success, failed };
