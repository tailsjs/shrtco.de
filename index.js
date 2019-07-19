var fetch = require("node-fetch")

class APIError extends Error {/**
* @param {Object} params - Параметры ошибки
* @param {Number} params.code - Код ошибки
* @param {String} params.message - Сообщение ошибки
*/
constructor(params) {
const { code, message } = params;

super(message);

this.code = code;
this.message = message;
this.name = this.constructor.name;

Error.captureStackTrace(this, this.constructor);
}
}

async function shorten(firstUrl) {
	var url = encodeURI(firstUrl);
	var result = (await (await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)).json());
	if (result.ok === true){
		return result;
	} else {
		throw new APIError({
			code: "APIERROR",
			message: result.error
		});
	};
}
async function info(someCode) {
	var code = encodeURI(someCode)
	var result = (await (await fetch(`https://api.shrtco.de/v2/info?code=${code}`)).json());
	if (result.ok === true){
		return result;
	} else {
		throw new APIError({
			code: "APIERROR",
			message: result.error
		});
	};
}
module.exports = {
	shorten,
	info
}