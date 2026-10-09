import {Sequelize} from 'sequelize'
import { DB } from '../config/configservece.js';





export let sequelize = new Sequelize(DB.name,DB.user,DB.pass,{
    host : DB.host,
    dialect : DB.dialect,
    pool : {
        max :DB.max ,
        min :DB.min
    }

})
export const connect = async()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: false});
        console.log(`DB Connected`);
        
    } catch (err) {
        console.log(`DB connection failed`);
        console.error(err);
        process.exit(1)
    }
}

