// eslint-disable-next-line import/no-named-default
import { Knex, default as setupKnex } from 'knex'
import { env } from './env'

const connection =
  env.DATABASE_CLIENT === 'sqlite3'
    ? {
      filename: env.DATABASE_URL,
    }
    : env.DATABASE_URL

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
