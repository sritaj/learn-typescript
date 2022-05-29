/**
 * function to print error message and error code
 * @param {string} msg - error message
 * @param {number} code - error code
 */
//code where the execution stops or is in infinite loop, the type is infered as the never
function throwErrorMsg(msg: string, code: number): never {
  throw { message: msg, errorCode: code };
}
