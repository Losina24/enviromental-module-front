/**
 * Name: Sensor.ts
 * Date: 12 - 12 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to manage sensors
 */

import Device from "./Device";

 export default class Sensor {
    
    // Atributes
    private id: number;
    private device: Device;
    private name: string;
    private type: string;
    private status: boolean;

    // Constructor
    constructor( args?: {id: number, name: string, device: Device, type: string, status: boolean}) {
        if (args) {
            this.id = args.id;
            this.name = args.name;
            this.device = args.device;
            this.type = args.type;
            this.status = args.status;
        }
    }

    // Getters
    /**
     * Getter of the ID atribute
     * 
     * @returns 
     */
    public getId(): number {
        return this.id;
    }

    /**
     * Getter of the Device atribute
     * 
     * @returns 
     */
    public getDevice(): Device {
        return this.device;
    }

    /**
     * Getter of the Name atribute
     * 
     * @returns 
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Getter of the Type atribute
     * 
     * @returns 
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Getter of the Status atribute
     * 
     * @returns 
     */
    public getStatus(): boolean {
        return this.status;
    }

    // Setters
    /**
     * Setter of the ID atribute
     * 
     * @param id 
     */
    public setId(id: number): void {
        this.id = id;
    }

    /**
     * Setter of the Device atribute
     * 
     * @param device
     */
    public setDeviceId(device: Device): void {
        this.device = device;
    }

    /**
     * Setter of the Name atribute
     * 
     * @param name 
     */
    public setName(name: string): void {
        this.name = name;
    }

    /**
     * Setter of the Type atribute
     * 
     * @param type 
     */
    public setType(type: string): void {
        this.type = type;
    }

    /**
     * Setter of the Status atribute
     * 
     * @param status 
     */
    public setStatus(status: boolean): void {
        this.status = status;
    }
}
