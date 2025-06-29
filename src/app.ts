import express from "express";
import { PORT } from "./utils/AppParameters"

const app = express();

app.get('/', (req, res) => {
  console.log("Ehhhhcccheeeeeehhhhhhaoooooooohhhh")
  console.log(`Server running on http://localhost:${PORT}`)
  res.send('Hello World')
})

app.listen(PORT, () => {
  //console.log(`${process.env.APP_PORT}`);
});