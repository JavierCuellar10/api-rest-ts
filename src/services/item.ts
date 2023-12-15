//Este va a ser el encargado de la logica del negocio 
//conectandose y haciendo la interferencia con la base de datos
import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items"

//Recibimos los datos que deben cumplir con la interfaz car 
//y los insertamos en la base de datos
const insertCar = async (item : Car) =>{
    const responseInsert = await ItemModel.create(item)
    //la respuesta la retornamos
    return responseInsert;
};

//Función asincrona para obtener un carro por el id
const getCar = async(id:string) => {
    //Conectamos la constante para obtener directamente desde la bd
    //y la buscamos por su id
    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
}

//Función asincrona para obtener todos los items
const getCars = async() => {
    //Conectamos la constante para obtener directamente desde la bd
    const responseItem = await ItemModel.find({});
    return responseItem;
}

const updateCar = async (id:string, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate({_id: id}, data,{new:true},);
    return responseItem;

}

const deleteCar = async (id:string) => {
    const responseItem = await ItemModel.deleteOne({_id: id});
    return responseItem;
    
}

export { insertCar, getCars, getCar, updateCar, deleteCar};
