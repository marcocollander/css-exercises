const sharp = require("sharp");

sharp("./images/dama-pik.png")
  .resize(500, 762)
  .toFile("./img/dama-pik.png", (err) => {
    console.log(err);
  })
  .then(() => {
    console.log("Success");
  });
