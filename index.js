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
};

async function short(params) {
	if (!params.url)throw new APIError({
		code: -2,
		message: "You forgot parameter \"URL\""
	});
	var url = encodeURI(params.url);
	var result = (await (await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)).json());
	if (result.ok === true){
		return result;
	} else {
		throw new APIError({
			code: result.error_code,
			message: result.error
		});
	}
};
async function info(params) {
	if (!params.code)throw new APIError({
		code: -2,
		message: "You forgot parameter \"code\""
	});
	var code = encodeURI(params.code);
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

async function custom(params) {
	if (!params.url)throw new APIError({
		code: -2,
		message: "You forgot parameter \"url\""
	});
	if (!params.code)throw new APIError({
		code: -2,
		message: "You forgot parameter \"code\""
	});
	var url = encodeURI(params.url);
	var code = encodeURI(params.code);
	var form = new FormData();
	form.append("url", url);
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

async function emoji(params) {
	if (!params.url)throw new APIError({
		code: -2,
		message: "You forgot parameter \"url\""
	});
	var url = encodeURI(params.url);
	var result = (await (await fetch(`https://api.shrtco.de/v2/shorten?emoji&url=${url}`)).json());
	if (result.ok === true){
		return result;
	} else {
		throw new APIError({
			code: result.error_code,
			message: result.error
		});
	}
};
/*
*/
async function pass(params) {
	if (!params.url)throw new APIError({
		code: -2,
		message: "You forgot parameter \"url\""
	});
	if (!params.pass)throw new APIError({
		code: -2,
		message: "You forgot parameter \"pass\""
	});
	var url = encodeURI(params.url);
	var pass = encodeURI(params.pass);
	var form = new FormData();
	form.append("url", url);
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
	short,
	info,
	custom,
	emoji,
	pass
};