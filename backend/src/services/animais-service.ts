
import { pool } from '../database/connection'


class AnimaisService{
    async getAll(){
        try {
            const data = await pool.query("SELECT * FROM animais")
            return data.rows
        } catch (error) {
            console.log(error)
        }
    }
}

export const animaisService = new AnimaisService()