import { connect } from "npm:@planetscale/database@^1.4";

const config = {
  host: Deno.env.get("HOST"),
  username: Deno.env.get("USERNAME"),
  password: Deno.env.get("PASSWORD"),
};

const conn = connect(config);

await conn.execute(
  "CREATE TABLE dinosaurs (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL, description varchar(255) NOT NULL);",
);
await conn.execute(
  "INSERT INTO `dinosaurs` (id, name, description) VALUES (1, 'Aardonyx', 'An early stage in the evolution of sauropods.'), (2, 'Abelisaurus', 'Abels lizard has been reconstructed from a single skull.'), (3, 'Deno', 'The fastest dinosaur that ever lived.')",
);

const all_dino_results = await conn.execute("SELECT * FROM `dinosaurs`");
console.log(all_dino_results);

const one_dino_result = await conn.execute(
  "SELECT * FROM `dinosaurs` WHERE `name` = 'Deno'",
);
console.log(one_dino_result);
