import express, { Router, type Request, type Response } from 'express'
import { error } from 'node:console';
import { clienteService } from '../services/cliente-service';


export const clienteRouter = Router()

clienteRouter.get("/", async (req: Request, res: Response) => {
    try {
        const data = await clienteService.getAll()
        res.json(data)
    }
    catch (error) {
        console.error("erro", error)
    }
})

clienteRouter.post("/", async (req: Request<{}, {}, CriarCliente>, res: Response) => {
    try {
        const userData = req.body
        const data = await clienteService.postCliente(userData)
        res.json(data).status(200)
    } catch (error) {
        console.error("Erro:", error)
    }
})

interface CriarCliente {
    id: string,
    nome: string,
    telefone: string,
    idade: number, 
    email: string
}