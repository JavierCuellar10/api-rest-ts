import {Schema, Types, Model, model} from "mongoose";
import { Car } from "../interfaces/car.interface";
//Es un esquema(representacion de propiedades que se guardan en db) 
//y hacemos implementación de la interface de car
const ItemSchema = new Schema<Car>(
    //Se crean dos objetos
    {
        //datos importados de Car
        name: {
            type: String,
            //validación
            required: true,
        },
        color: {
            
            type: String,
            //validación
            required: true,
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"],
            required: true,
        },
        year:{
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type : Number,
            required: true,
        },

    },
    {
        //fecha de creación y actualización
        timestamps: true,
        //Guarda datos por la versión
        versionKey: false,
    }
);

//vamos a implementar ItemSchema en itemModel 
//model recibe string osea el nombre y el esquema
const ItemModel = model('items', ItemSchema);
export default ItemModel;