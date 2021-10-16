import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

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
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, auth-token"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
});

app.use(cors({ origin: "http://localhost:4200" }));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------------------------------
//Routes
// --------------------------------------------------------------------------

app.use("/api", require("./routes/routeGenero"));
app.use("/api", require("./routes/routeTipoDoc"));
app.use("/api", require("./routes/routeDatosAnimal"));
app.use("/api", require("./routes/routeSeccion"));
app.use("/api", require("./routes/routeLocalidad"));
app.use("/api", require("./routes/routeVacunaGato"));
app.use("/api", require("./routes/routeVacunaPerro"));
app.use("/api", require("./routes/routeAdoptante"));
app.use("/api", require("./routes/routeFundacion"));
app.use("/api", require("./routes/routeLogin"));
app.use("/api", require("./routes/routeAnimal"));
app.use("/api", require("./routes/routePublicacion"));
app.use("/api", require("./routes/routePuntoInteres"));

//esta carpeta se utlizará para guardar los archivos públicos de la aplicación
app.use("/uploads", express.static(path.resolve("uploads")));

//module.exports = app;
export default app;
