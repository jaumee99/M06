import { CartaSetIMig } from "../../Implementions/Carta/CartaSetIMig";

export interface IJugador {
    nom: string;
    cartes: CartaSetIMig[];

    agafar(carta:CartaSetIMig): void;
    contar(): number;
}