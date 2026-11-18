import { configDotenv } from "dotenv"
import { buildApp } from "./app.js"

configDotenv()

const app = buildApp()

app.listen({ port: process.env.PORT ?? 3000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})