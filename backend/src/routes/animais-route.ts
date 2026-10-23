import express, {Router, type Request, type Response} from 'express'
import { animaisService } from '../services/animais-service'
import { animaisController } from '../controllers/animais_controller'
export const animaisRouter = Router()


animaisRouter.get("/animais", animaisController.getAll)