  import dotenv from 'dotenv';

  doenv.config()

  export const ENV ={
    NODE_ENV:process.env.NODE_ENV,
    PORT_ENV:process.env.PORT,
    DB_URL:process.env.DB_URL
 

  }