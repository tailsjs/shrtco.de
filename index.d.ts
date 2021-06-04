/**
 * Shorten link.
 * @param url URL to short.
 */
 export function shorten(url: string) : Promise<any>

 /**
  * Get information about link from code.
  * @param code Link code.
  */
 export function info(code: string) : Promise<any>
 /**
  * Shorten link with custom code
  * @param url URL to short.
  * @param code Your code.
  */
 export function customShorten(url: string, code: string) : Promise<any>
 
 /**
  * Shorten link with emojicode
  * @param url URL to short.
  */
 export function emojiCode(url: string) : Promise<any>
 
 /**
  * Shorten link with password
  * @param url URL to short.
  * @param password Password.
  */
 export function passShort(url: string, password: string) : Promise<any>