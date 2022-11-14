// get the client
import mysql from "npm:mysql2@^2.3.3/promise";

// create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

await connection.query("CREATE DATABASE denos");
await connection.query("use denos");
await connection.query(
  "CREATE TABLE `dinosaurs` (   `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,   `name` varchar(255) NOT NULL,   `description` varchar(255) )",
);
await connection.query(
  "INSERT INTO `dinosaurs` (id, name, description) VALUES (1, 'Aardonyx', 'An early stage in the evolution of sauropods.'), (2, 'Abelisaurus', 'Abels lizard has been reconstructed from a single skull.'), (3, 'Deno', 'The fastest dinosaur that ever lived.')",
);

const [select_all_results, select_all_fields] = await connection.query(
  "SELECT * FROM `dinosaurs`",
);
console.log(select_all_results);

const [select_one_results, select_one_fields] = await connection.query(
  "SELECT * FROM `dinosaurs` WHERE `name` = 'Deno'",
);
console.log(select_one_results);

// close the connection
await connection.end();
