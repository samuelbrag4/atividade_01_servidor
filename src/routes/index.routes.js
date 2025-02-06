import { Router } from "express";

import usuariosRoutes from "./usuarios.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

routes.use("/usuarios", usuariosRoutes);

export default routes;