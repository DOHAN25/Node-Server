const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  models.Products.findAll()
    .then((result) => {
      console.log("Products : ", result);
      res.send({
        products: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("에러가 발생하였습니다.");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  res.send(`id는 ${id} 입니다.`);
});

app.listen(port, () => {
  console.log("서버가 돌아가고 있습니다.");
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB 연결 성공!");
    })
    .catch((err) => {
      console.error(err);
      console.log("DB 연결 에러");
      process.exit();
    });
});
