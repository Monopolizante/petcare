import express from 'express'
import {clienteRouter} from './routes/cliente-route.ts'
import { animaisRouter } from './routes/animais-route.ts'

const port = 3000
const app = express()

app.use(express.json())

app.use("/cliente", clienteRouter)
app.use("/animais", animaisRouter)
app.listen(port, () =>{
    console.log(`Listening on port ${port}` )
})