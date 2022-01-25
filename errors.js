class APIError extends Error {
    constructor({ code, message }) {
      super(message);
  
      this.message = message;
      this.code = code;
    }
}
class ParamError extends Error {
    constructor({ code, message }) {
      super(message);
  
      this.message = message;
      this.code = code;
    }
}

module.exports = {
    APIError,
    ParamError
}