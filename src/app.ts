import express from "express";
import { AppParameters } from "./utils/AppParameters"
import { UserDAO } from "./dao/UserDAO";

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello World')
  const userDAO = new UserDAO();
  const users = await userDAO.readAll();
  console.log('Users fetched:', users);
})

app.listen(AppParameters.APP_PORT, () => {
  console.log(`Server running on http://localhost:${AppParameters.APP_PORT}`);
});