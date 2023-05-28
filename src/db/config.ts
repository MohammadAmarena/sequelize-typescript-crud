import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos.js";
import * as config from "../config.js";

export const connection = new Sequelize({
  dialect: "mysql",
  host: config.DBhost || "localhost",
  username: config.DBuser || "root",
  password: config.DBpassword || "",
  database: config.database,
  logging: false,
  models: [Todos],
});
