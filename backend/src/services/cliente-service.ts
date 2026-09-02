import express, { type Request, type Response} from 'express'
import { error } from 'node:console'
import { randomUUID } from 'node:crypto'
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
    async postCliente(userData: Object){
        try {
            console.log(userData)
            const {userName, userTelefone, userIdade, userEmail} = userData
            await pool.query("INSERT INTO clientes(nome, telefone, idade, email) VALUES ($1, $2, $3, $4)", 
                [userName, userTelefone, userIdade, userEmail])
        } catch (error) {
            console.error("Erro:",error)
        }
    }
}

export const clienteService = new ClienteService()