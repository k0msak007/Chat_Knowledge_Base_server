import { Pool } from 'pg'
import { config } from '../config/config'

const client = new Pool({
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password,
    ssl:
        config.environment === 'production'
            ? {
                  rejectUnauthorized: true,
              }
            : false,
})

export default client
