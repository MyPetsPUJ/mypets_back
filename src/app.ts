import express from "express";
import path from "path";
import cors from "cors";

require("./database");

//Initilizations
const app = express();

// --------------------------------------------------------------------------
//Settings
// --------------------------------------------------------------------------

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  next();
});

app.use(cors({ origin: "http://localhost:4200" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------------------------------
//Routes
// --------------------------------------------------------------------------

app.use("/api", require("./routes/routeAdoptante"));
app.use("/api", require("./routes/routeFundacion"));
app.use("/api", require("./routes/routeLogin"));
app.use("/api", require("./routes/routeAnimal"));
app.use("/api", require("./routes/routePublicacion"));

//esta carpeta se utlizará para guardar los archivos públicos de la aplicación
app.use("/uploads", express.static(path.resolve("uploads")));

//module.exports = app;
export default app;
