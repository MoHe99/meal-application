export interface APIMethods {
    getAll(): Promise<any>;
    getOne(id: number): Promise<any | null>;
    createMeal(entity: any): Promise<any>
    updateMeal(entity: any): Promise<any>;
    deleteMeal(id: number): Promise<number>;
}