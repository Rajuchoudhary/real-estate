const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/user/*", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/user/property/*", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/profile/*", { target: "http://localhost:5000/" }));
  app.use(
    proxy("/api/profile/user/current", { target: "http://localhost:5000/" })
  );

  app.use(proxy("/api/profile/user/*", { target: "http://localhost:5000/" }));
  app.use(
    proxy("/api/profile/user/property/*", { target: "http://localhost:5000/" })
  );
  app.use(proxy("/api/property/all", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/property/", { target: "http://localhost:5000/" }));
  app.use(proxy("/api/property/add", { target: "http://localhost:5000/" }));
  app.use(
    proxy("/api/property/update/*", { target: "http://localhost:5000/" })
  );
};
