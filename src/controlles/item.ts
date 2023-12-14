import { Request, Response } from 'express';

const getItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET:ITEM");
    }
}

const getItems = (req: Request, res: Response) => {
    try {
    } catch (e) {
        res.status(500);
        res.send("ERROR_GET:ITEM");
    }
}

const updateItem = (req: Request, res: Response) => {

}

const postItem = (req: Request, res: Response) => {

}

const deleteItem = (req: Request, res: Response) => {

}

export { getItem, getItems, updateItem, postItem, deleteItem };
