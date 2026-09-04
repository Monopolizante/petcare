import express, {Router, type Request, type Response} from 'express'
import { error } from 'node:console';
import { pool } from '../database/connection'
import { animaisService } from '../services/animais-service'
export const animaisRouter= Router()


animaisRouter.get("/", async (req: Request, res: Response) => {
    try {
        const data = await animaisService.getAll()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})