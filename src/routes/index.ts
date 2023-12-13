import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER =`${__dirname}`;
const router = Router();

/**
 * index.ts item[']
 * @param fileName
 * @returns 
 */
const cleanFileName = (fileName:String) => {
    const file = fileName.split('.').shift()
    return
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    console.log(fileName);
});


export { router };