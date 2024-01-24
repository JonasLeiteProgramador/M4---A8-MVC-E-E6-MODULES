import express from 'express'
const routes = express.Router()

import { register, getAllAdmins,getAdminUserName } from '../controller/admcontroler.js'





routes.post('/registrate-admin', (req, res) => {
  const { nome, email, senha,adminUser, controleCoins } = req.body;
  const newAdmin = register(nome, email, senha,adminUser, controleCoins)
  res.json({newAdmin})

})

routes.get("/admins", (req, res) => {
  const listAdmins = getAllAdmins();
  res.json(listAdmins);
});

routes.get("/admin-find", (req, res) => {
  const { adminUser } = req.body;
  const admin = getAdminUserName(adminUser);
  res.json({ admin });
});

export { routes } 