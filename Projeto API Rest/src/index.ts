import express from "express";
import statusRoute from "./routes/status.router";
import usersRoute from "./routes/users.route";

//Express gerenciador de rotas
const app = express();

//Comfigurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuração de Rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicialização do servidor

app.listen(3000, () => {
  console.log("Aplicação em execução na porta 3000");
});
