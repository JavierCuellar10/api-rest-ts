// Define la interfaz Car que describe la estructura de un objeto Car
export interface Car {
    // Propiedad que representa el color del automóvil (cadena de texto)
    color: string;

    // Propiedad que representa el tipo de combustible del automóvil (gasolina o eléctrico)
    gas: 'gasoline' | 'electric';

    // Propiedad que representa el año de fabricación del automóvil (número entero)
    year: number;

    // Propiedad que representa una descripción del automóvil (cadena de texto)
    description: string;

    // Propiedad que representa el precio del automóvil (número)
    price: number;
}