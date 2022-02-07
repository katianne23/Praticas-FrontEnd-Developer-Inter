import express from "express";
import basicAuthenticationMiddleware from "./middlewares/basic-authentication.middlewares";
import bearerAuthenticationMiddleware from "./middlewares/jwt-authentication.middlewares";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.router";
import usersRoute from "./routes/users.route";

//Express gerenciador de rotas
const app = express();

//Comfigurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuração de Rotas
app.use(usersRoute);
app.use(authorizationRoute);

app.use(bearerAuthenticationMiddleware)
app.use(statusRoute);


//Configuração dos Handles de Erro
app.use(errorHandler);


//Inicialização do servidor

app.listen(3000, () => {
  console.log("Aplicação em execução na porta 3000");
});
