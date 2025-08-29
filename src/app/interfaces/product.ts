import { ICategory } from "./caterogy";

export interface IProduct{
    id: number,
    title: string,
    slog: string,
    price: number,
    description: string,
    category: ICategory,
    images: string[],
    creationAt: string,
    updatedAt: string
}