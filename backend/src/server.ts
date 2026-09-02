import express, {response, type Request, type Response} from 'express'
import { error } from 'node:console'
import { randomUUID } from 'node:crypto'
import { pool } from './database/connection.ts'
import {clienteRouter} from './routes/cliente-route.ts'

const port = 3000
const app = express()

app.use(express.json())

app.use("/cliente", clienteRouter)

app.use("/addCliente", clienteRouter)

interface  CreateUserBody {
    name: string;

}

app.listen(port, () =>{
    console.log(`Listening on port ${port}` )
})