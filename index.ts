import "reflect-metadata";
//import * as winston from 'winston';
import * as dotenv from 'dotenv';
dotenv.config();
import KubicServer from './src/server/kubicServer';

const init = ()=>{
    const ks:KubicServer = new KubicServer();

    ks.start();
}

init();
