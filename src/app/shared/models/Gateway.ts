/**
 * Name: Gateway.ts
 * Date: 12 - 12 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to manage gateways
 */

export default class Gateway {
    
    // Atributes
    private id: number;
    private name: string;
    private council: number;
    // Tiene más cosas

    constructor( args?: {id: number, name: string, council: number} ){
        if (args) {
            this.id = args.id;
            this.name = args.name;
            this.council = args.council;
        }
    }

    public setId(id: number) {
        this.id = id;
    }
}