var fetch = require("node-fetch");
var FormData = require("form-data");
class APIError extends Error {
/**
* @param {Object} params - Параметры ошибки
* @param {Number} params.code - Код ошибки
* @param {String} params.message - Сообщение ошибки
*/
constructor(params) {
const { 
	code, 
	message 
      } = params;

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
			code: result.error_code,
			message: result.error
		});
	};
};
async function info(someCode) {
	var code = encodeURI(someCode);
	var result = (await (await fetch(`https://api.shrtco.de/v2/info?code=${code}`)).json());
	if (result.ok === true){
		return result;
	} else {
		throw new APIError({
			code: result.error_code,
			message: result.error
		});
	}
};

async function customShorten(firstUrl, someCode) {
	var url = encodeURI(firstUrl);
	var code = encodeURI(someCode);
	var form = new FormData();
	form.append("url", url) ;
	form.append("custom_code", code);
	var result = (await (await fetch("https://api.shrtco.de/v2/shorten", {
		method: "POST", 
		body: form 
	})).json());
	if (result.ok === true) {
		return result;
	} else {
		throw new APIError({
			code: result.error_code,
			message: result.error
		});
	}
};

async function emojiCode(firstUrl) {
	var url = encodeURI(firstUrl);
	var result = (await (await fetch(`https://api.shrtco.de/v2/shorten?emoji&url=${url}`)).json());
	if (result.ok === true){
		return result;
	} else {
		throw new APIError({
			code: result.error_code,
			message: result.error
		});
	};
}

async function passShort(firstUrl, somePass) {
	var url = encodeURI(firstUrl);
	var pass = encodeURI(somePass);
	var form = new FormData();
	form.append("url", url) ;
	form.append("password", pass);
	var result = (await (await fetch("https://api.shrtco.de/v2/shorten", {
		method: "POST", 
		body: form 
	})).json());
	if (result.ok === true) {
		return result;
	} else {
		throw new APIError({
			code: result.error_code,
			message: result.error
		});
	}
};
module.exports = {
	shorten,
	info,
	customShorten,
	emojiCode,
	passShort
};
