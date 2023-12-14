import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER =`${__dirname}`;
const router = Router();

/**
 * Cargador dinamico de rutas
 * index.ts item[']
 * @param fileName
 * @returns 
 */
const cleanFileName = (fileName:String) => {
    const file = fileName.split('.').shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index" ){
        //importacion dinamica
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`se esta cargando la ruta..../${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    } 
});


export { router };