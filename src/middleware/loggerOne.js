const loggerOne = (request, response, next) => {
  console.log(request.url);
  next();
};

module.exports = loggerOne;
