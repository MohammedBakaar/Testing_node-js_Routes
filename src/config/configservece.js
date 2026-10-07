import {config} from 'dotenv'
import {resolve} from 'path'


config({
    path : resolve(`.env.${process.env.NODE_ENV}`)
}
)


export const PORT = Number(process.env.PORT)
export const DB = {
    name : process.env.DB_NAME ,
    user : process.env.DB_USER ,
    pass : process.env.DB_PASS ,
    host :process.env.DB_HOST ,
    dialect : process.env.DB_DIALECT,
    max : Number(process.env.DB_MAX),
    min : Number(process.env.DB_MIN)
}