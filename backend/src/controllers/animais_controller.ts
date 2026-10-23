import { type Request, type Response } from "express"
import { animaisService } from "../services/animais-service"

class AnimaisController {
    async getAll(){
        const data = await animaisService.getAll()
    }
}

export const animaisController = new AnimaisController()