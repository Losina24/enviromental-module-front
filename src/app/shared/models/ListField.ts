/**
 * Name: ListField.ts
 * Date: 25 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to manage list fields
 */

 export default class ListField {

    // Atributes
    private name: string;
    private value: string | number | boolean;

    // Constructor
    constructor(){}

    // Methods
    /**
     * Returns the element's name
     * getName() -> Text
     * 
     * @returns Name
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Returns the element's value
     * getValue() -> Text | Z | T/F
     * 
     * @returns Name
     */
    public getValue(): string | number | boolean {
        return this.value;
    }

    /**
     * Set the element's name
     * Text -> setName()
     * 
     * @param name 
     */
    public setName( name:string ): void {
        this.name = name
    }

    /**
     * Set the element's value
     * Text | Z | T/F -> setValue()
     * 
     * @param name 
     */
    public setValue( value: string | number | boolean ): void {
        this.value = value;
    }
}