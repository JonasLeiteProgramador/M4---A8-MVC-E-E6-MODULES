import express from 'express';
import { routes } from './src/routes/admRoutes.js'


const app = express()


app.use(express.json());
app.use(routes)



app.listen(4006, () => {
    console.log('O server esta on ')
})