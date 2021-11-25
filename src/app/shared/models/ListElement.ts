/**
 * Name: ListElement.ts
 * Date: 25 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to generate list components
 */
import ListField from "./ListField";

export default class ListElement {

    // Atributes
    private listFields: ListField[];

    // Constructor
    constructor(listFields: ListField[]){
        this.listFields = listFields
    }

    // Methods
    public getListFieldNames(): string[] {
        let names: string[] = []
        
        this.listFields.forEach(element => {
            names.push(element.getName())
        });

        return names;
    }

    public getListFieldValues(): Array<string | number | boolean> {
        let values: Array<string | number | boolean> = []
        
        this.listFields.forEach(element => {
            values.push(element.getValue())
        });

        return values;
    }
}