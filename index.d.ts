/**
 * Shorten link.
 * @param url URL to short.
 */
 export function short(params: { url: string }) : Promise<any>

 /**
  * Get information about link from code.
  * @param code Link code.
  */
 export function info(params: { code: string }) : Promise<any>
 /**
  * Shorten link with custom code
  * @param url URL to short.
  * @param code Your code.
  */
 export function custom(params: { url: string, code: string }) : Promise<any>
 
 /**
  * Shorten link with emojicode
  * @param url URL to short.
  */
 export function emoji(params: { url: string }) : Promise<any>
 
 /**
  * Shorten link with password
  * @param url URL to short.
  * @param password Password.
  */
 export function pass(params: { url: string, pass: string }) : Promise<any>