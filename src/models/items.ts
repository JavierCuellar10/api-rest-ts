import {Schema, Types, Model, model} from "mongoose";
import { Car } from "../interfaces/car.interface";
//Es un esquema(representacion de propiedades que se guardan en db) 
//y hacemos implementación de la interface de car
const ItemSchema = new Schema<Car>(
    //Se crean dos objetos
    {
        color: {
            type: String,
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"],
        },
        year:{
            type: Number,
        },
        description: {
            type: String
        },
        price: {
            type : Number,
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
const ItemModel = model('items', ItemSchema);
export default ItemModel;