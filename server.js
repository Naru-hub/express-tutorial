const express = require("express");
const app = express();
const userRouter = require("./routes/user");

const PORT = 3000;

// app.use(mylogger);
// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("hello express");
  // res.send("<h1>こんにちは</h1>");
  // res.sendStatus(404);
  // res.status(500).send("エラーです。");
  // res.status(500).json({ msg: "エラーです" });
  res.render("index", { text: "Node.jsとExpress" });
});

// ルーティング
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);
// app.use("/product", productRouter);

app.listen(PORT, () => console.log("サーバが起動しました"));
