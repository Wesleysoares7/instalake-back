import "dotenv/config";
// Importando a função para conectar ao banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelecendo a conexão com o banco de dados utilizando a string de conexão armazenada em variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
  // Acessando o banco de dados 'imensao-instabytes' e a coleção 'posts'
  const db = conexao.db("imensao-instabytes");
  const colecao = db.collection("posts");
  // Retornando todos os posts encontrados na coleção
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("imensao-instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imensao-instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost });
}
