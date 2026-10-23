import { pool } from "../database/connection"
import { type Request, type Response} from 'express'
import { criarAnimal, retornoAnimais } from "../types/animais"

class AnimaisRepository {
    async getAll(){
        try {
                const data = await pool.query("SELECT * FROM animais")
                return data.rows
            } catch (error) {
                console.log(error)
            }
        }
    async createAnimal(dados: criarAnimal): Promise<retornoAnimais>{
            const {nome, dono} = dados
            const response = await pool.query<retornoAnimais>("INSERT INTO animais(nome, dono) VALUES ($1, $2) RETURNING *", [nome, dono])
            const animalCriado = response.rows[0]
            if(!animalCriado){
                throw new Error("O Banco falhou na criação de animais")
            }
            return animalCriado
        
    }
}

export const animaisRepository = new AnimaisRepository()