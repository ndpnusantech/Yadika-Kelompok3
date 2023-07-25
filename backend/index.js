const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const kamarRoute = require("./routes/kamarRoute.js");
const kasurRoute = require("./routes/kasurRoute.js");
const userRoute = require("./routes/userRoute.js");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

// Route
app.use(kamarRoute);
app.use(kasurRoute);
app.use(userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Ready on port ${process.env.PORT}`);
});
