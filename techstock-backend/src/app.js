import fastfy from 'fastify'
import { stockRoutes } from './routes/stock-routes.js'
import cors from '@fastify/cors'

export function buildApp() {

    const app = fastfy({ logger: true })

    app.register(cors, { logger: true })

    app.register(stockRoutes, { prefix: '/itens' })

    return app;
}
