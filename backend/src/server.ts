import express, {response, type Request, type Response} from 'express'
import { error } from 'node:console'
import { randomUUID } from 'node:crypto'

const port = 3000
const app = express()

app.use(express.json())

app.get("/health", (req: Request, res: Response) => {
    return res.json({
        status: "ok"
    })
})

app.post("/teste", (req: Request<object, object, CreateUserBody>, res: Response) =>{
    const name = req.body.name?.trim()
    if(!name){
        return res.status(400).json({
            error: "Name is required"
        })
    }
    return res.status(201).json({
        id: randomUUID(),
        name
    })
})

interface  CreateUserBody {
    name: string;

}

app.listen(port, () =>{
    console.log(`Listening on port ${port}` )
})