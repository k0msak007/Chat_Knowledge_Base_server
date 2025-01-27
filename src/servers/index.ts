import express from 'express'
import { userRouter } from '../routes/user.route'

export class ServerModule {
    private readonly app: express.Application

    constructor() {
        this.app = express()
        this.configureMiddleware()
        this.configureRoutes()
    }

    private configureMiddleware(): void {
        this.app.use(express.json())
    }

    private configureRoutes(): void {
        // Create base API router
        const apiRouter = express.Router()

        // Register user routes under /users path
        apiRouter.use('/users', userRouter)

        // Apply base path to all API routes
        this.app.use('/api', apiRouter)
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    }
}

export default new ServerModule()
