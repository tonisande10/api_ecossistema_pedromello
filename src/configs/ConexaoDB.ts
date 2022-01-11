import Knex from "knex";

export const Conexao = Knex({
  client: "mysql",
  connection: {
    host: process.env.HOSTDB,
    port: process.env.PORTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.NAMEDB,
  },
});
