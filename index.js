const fetch = require("node-fetch");
const FormData = require("form-data");
const { APIError, ParamError } = require("./errors.js");
const BASE_URL = "https://api.shrtco.de/v2/";

class Shorter {
    /**
     * shrtco.de
     * 
     * @param {String} url URL to short.
     */
    constructor(url) {
        if (!url) throw new ParamError({
            code: 0,
            message: 'You forgot "URL" argument.'
        })
        this.url = encodeURI(url)
    };

    /**
     * Shorten link.
     * 
     * @param {Object} params? Object with params.
     * @param {String} params.code? Your code. 
     * @param {String} params.pass? Your password. 
     * @param {Boolean} params.emoji? Make code as emoji
     * @returns {Object} JSON with shorted urls
     */
    async short(params) {
        let form = new FormData();
        if (params.code) form.append("custom_code", params.code);
        if (params.pass) form.append("password", params.pass)
        if (params.code || params.pass) form.append("url", this.url)
        const result = (await (await fetch(BASE_URL + "shorten" + ((!params.pass && !params.code) ? `?url=` + this.url : "") + (params.emoji ? `${(params.code || params.pass) ? "?" : "&"}emoji` : ""), (params.code || params.pass) ? {
            method: "POST",
            body: form
        } : undefined)).json());

        if (!result.ok) throw new APIError({
            code: result.error_code,
            message: result.error
        });

        return result
    };
};

class Info {
    /**
     * Get information about link from code.
     * @param {String} code Link code
     * @returns {JSON} Info about code.
     */
    constructor(code) {
        if (!code) throw new ParamError({
            code: 0,
            message: 'You forgot "code" argument.'
        })
        return this.info(encodeURI(code))
    };

    async info(code) {
        const result = (await (await fetch(BASE_URL + "info?code=" + code)).json());

        if (!result.ok) throw new APIError({
            code: result.error_code,
            message: result.error
        });

        return result
    }
}

module.exports = {
    Shorter,
    Info
}