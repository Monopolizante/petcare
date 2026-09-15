
import { stat } from 'node:fs'
import { pool } from '../database/connection.ts'

class ClienteService {
    async getAll(){
        try {
            const userData = await pool.query("SELECT * FROM clientes")
            return userData.rows 
        }  catch (error){
            console.error("Erro",error)
        }
    }
    async getCliente(idCliente: string){
        try {
            const data = await pool.query("SELECT * FROM clientes WHERE id=$1", [idCliente])
            return data.rows[0]
        } catch (error) {
            console.log("Erro em coletar dados do cliente:",error)
        }
    }
    async postCliente(userData: Object){
        try {
            console.log(userData)
            const trueData = JSON.parse(JSON.stringify(userData))
            const {nome: nome, telefone: telefone, idade: idade, email: email} = trueData
            const data = await pool.query("INSERT INTO clientes(nome, telefone, idade, email) VALUES ($1, $2, $3, $4) RETURNING id", 
                [nome, telefone, idade, email])
            return data.rows[0].id
        } catch (error) {
            console.error("Erro:",error)
        }
    }
}

export const clienteService = new ClienteService()