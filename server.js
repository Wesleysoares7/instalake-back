// Importando o módulo express para criar o servidor web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Criando a aplicação express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Iniciando o servidor na porta 3000 e exibindo uma mensagem de sucesso no console
app.listen(3000, () => {
  console.log("servidor escutando..");
});
