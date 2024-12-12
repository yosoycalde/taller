const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

//middleware para analizar los datos JSON
app.use(express.json());

//Configuracion para la conexio mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "practica",
});

//conexion ala base de datos
db.connect((err) => {
  if (err) {
    console.error("ERROR AL CONECTAR A LA BASE DDE DATOS", err);
  } else {
    console.log("Conectado a la base de datos");
  }
});
//crear una nueva materia
app.post("/materias", (req, res) => {
  const materia = req.body;
  const sql =
    "INSERT INTO materias (NombreMateria, Descripcion, Nota) VALUES(?, ?, ?)";
  db.query(
    sql,
    [materia.NombreMateria, materia.Descripcion, materia.Nota],
    (err, result) => {
      if (err) {
        console.error("Error al crear una nueva materia:", err);
        res.status(500).json({ error: "Error al crear una nueva materia" });
      } else {
        console.log("Materia crada con exito");
        res
          .status(201)
          .json({ massage: "Materia creada", id: result.insertId });
      }
    }
  );
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`servidor corriendo en http//localhost:${port}`);
});
