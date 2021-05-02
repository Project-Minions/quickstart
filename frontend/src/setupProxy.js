const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      // target: process.env.REACT_APP_API_HOST || "http://localhost:8081",
      target: process.env.REACT_APP_API_HOST || "http://plaidproxyserver-env-1.eba-jpkiu7tz.us-west-1.elasticbeanstalk.com",
      changeOrigin: true
    })
  );
};
