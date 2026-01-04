const { error } = require("console");
const fs = require("fs");
const path = require("path");
//criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     console.log("Erro: ", error);
//   }
//   console.log("pasta criadas");
// });

//criar um arquivo

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("Arquivo criado");
  }
);
