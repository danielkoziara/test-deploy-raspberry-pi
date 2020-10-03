const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const response = {
    date: new Date().toLocaleString(),
    env: process.env.NODE_ENV,
  };
  console.log(response);
  return res.json(response);
});

app.listen(8080, () => console.log("Server listen on 8080 port."));
