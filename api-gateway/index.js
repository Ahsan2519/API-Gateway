const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const routes = {
  "/users": process.env.USER_SERVICE_URL,
  "/products": process.env.PRODUCTS_SERVICE_URL,
};

for (const route in routes) {
  const target = routes[route];
  console.log(process.env.USER_SERVICE_URL, ">>>>>>>>>>>>");
  app.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: { [`^${route}`]: "" },
    })
  );
}

// app.use('/users',createProxyMiddleware({
//   target:'http://localhost:8001',
//   pathRewrite: { '^/users': "" },
// }))

app.listen(PORT, () =>
  console.log(`API gateway running on http://localhost:${PORT}`)
);
