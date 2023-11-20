const express = require("express");
const cors = require("cors");
const { routes } = require("./routers");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  console.log("rodando");
});

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }

  return res
    .status(500)
    .json({ status: "erro", message: "Erro interno do Servidor" });
});

app.listen(3000, () => console.log("Servidor rodando"));