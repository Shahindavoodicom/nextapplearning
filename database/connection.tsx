import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";

export const database = new Sequelize({
  storage: "./database/database.sqlite",
  dialect: 'sqlite',
  dialectModule: sqlite3
});

database
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("failed to connect to db");
  });
