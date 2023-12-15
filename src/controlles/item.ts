// Importa los módulos necesarios
import { Request, Response, response } from 'express';
import dbConnect from '../config/mongo'; // Importa la configuración de la conexión a la base de datos
import { handleHtttp } from '../utils/error.handle'; // Importa una función para manejar errores HTTP
import { insertCar, getCars, getCar, updateCar, deleteCar} from '../services/item';

// Función para obtener un elemento por ID
//Hay dos formas de obtener el id si esta asi req: Request
//pues despues del try creariamos una const id que sera igual  a los parametros de req
//y quedaria así const id = req.params; y pasamos esa constante a getCar
//getCar(id)
//Y la otra forma con params directo
const getItem = async ({params}: Request, res: Response) => {
    try {
        //Creamos la variable id
        const { id } = params;
        //Obtenemos el item por su id
        const response = await getCar(id);
        //Validacion
        const data = response ? response : "NOT_FOUND";
        //obtenemos la constante response
        res.send(data);
        
    } catch (e) {
        // En caso de error, utiliza la función handleHtttp para manejar la respuesta HTTP
        handleHtttp(res, 'ERROR_GET_ITEM');
    }
};

// Función para obtener varios elementos
const getItems = async (req: Request, res: Response) => {
    try {
        //aqui usamos getCar para obtener la lista de 
        //la bd
        const response = await getCars();
        //obtenemos la constante response
        res.send(response);
    } catch (e) {
        // En caso de error, utiliza la función handleHtttp para manejar la respuesta HTTP
        handleHtttp(res, 'ERROR_GET_ITEMS');
    }
};

// Función para actualizar un elemento por ID
const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        //Creamos la variable id
        const { id } = params;
        //Obtenemos el item por su id y actualizamos 
        const response = await updateCar(id, body);
        //obtenemos la constante response
        res.send(response);
        
    } catch (e) {
        // En caso de error, utiliza la función handleHtttp para manejar la respuesta HTTP
        handleHtttp(res, 'ERROR_UPDATE_ITEM');
    }
};

// Función para crear un nuevo elemento
const postItem = async ({ body }: Request, res: Response) => {
    try {
        //aqui enviamos la variable
        const responseItem = await insertCar(body)
        // En este caso, simplemente respondes con el cuerpo de la solicitud como ejemplo
        res.send(responseItem);
    } catch (e) {
        // En caso de error, utiliza la función handleHtttp para manejar la respuesta HTTP
        handleHtttp(res, 'ERROR_POST_ITEM', e);
    }
};

// Función para eliminar un elemento por ID
const deleteItem = async ({params}: Request, res: Response) => {
    try {
        //Creamos la variable id
        const { id } = params;
        //Obtenemos el item por su id
        const response = await deleteCar(id);
        //obtenemos la constante response
        res.send(response);
    } catch (e) {
        // En caso de error, utiliza la función handleHtttp para manejar la respuesta HTTP
        handleHtttp(res, 'ERROR_DELETE_ITEM');
    }
};

// Exporta todas las funciones como parte del módulo
export { getItem, getItems, updateItem, postItem, deleteItem };
