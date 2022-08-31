import fs from "fs";
import colors from "colors";
import { users } from "../data/users.js";
import { clearProp, addProp } from "./helper.js";


const newUsers = users.map(({ nat, id, dob, timezone, cell, ...rest }) => {
  clearProp(rest, "login", "password");

  addProp(rest["login"], "password", `bcrypt.hashSync('123456',10)`);
  console.log(rest)

  return rest;
});

fs.writeFile("server/mockData/users.js", JSON.stringify(newUsers), (error) => {
  if (error) {
    console.log(`${error}`.red);
    return;
  }
  console.log("File has been created".green);
});
