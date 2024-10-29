const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = 8000;

const routes = {
  "/users": "http://localhost:8001",
  "/products": "http://localhost:8002",
};

for (const route in routes) {
  const target = routes[route];
  console.log(target,'>>>>>>>>>>>>')
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

app.listen(port, () =>
  console.log(`API gateway running on http://localhost:${port}`)
);
