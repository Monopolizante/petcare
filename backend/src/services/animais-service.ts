
import { pool } from '../database/connection'
import { animaisRepository } from '../repositories/animais_repositories'
import { type Request, type Response } from 'express'

class AnimaisService {
    async getAll(){
        const data = await animaisRepository.getAll()
        return data
    }
}

export const animaisService = new AnimaisService()