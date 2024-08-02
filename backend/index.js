"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user-routes");
const captionRouters = require("./routes/caption-routes");
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

app.use(express.json());
app.use(bodyParser.json());

app.use("/api", userRoutes.routes);
app.use("/api", captionRouters.routes);

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
