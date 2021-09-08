import mongoose from "mongoose";

const url =
  "mongodb+srv://gabokid:bg1CbQvQEvqavI4w@cluster0.igejl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conectado a la BD");
  })
  .catch(() => {
    console.log("Conexión fallida");
  });
