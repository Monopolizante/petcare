import express, {Router, type Request, type Response} from 'express'
import { error } from 'node:console';
import { randomUUID } from 'node:crypto';
import { pool } from '../database/connection'
import { clienteService } from '../services/cliente-service';


export const clienteRouter= Router()

clienteRouter.get("/", async (req: Request, res: Response) => {
    try{
        const data = await clienteService.getAll()
        res.json(data)
    }
    catch (error) {
        console.error("erro",error)
    }
})

clienteRouter.post("/", async (req: Request, res:Response) =>{
    try{
        const userData = req.body
        const data = await clienteService.postCliente(userData)
        res.json(data)
    } catch(error){
        console.error("Erro:",error)
    }
})