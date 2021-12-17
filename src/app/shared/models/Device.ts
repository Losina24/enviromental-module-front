// Va a ser la clase padre de todos los dispositivos en un futuro

import Gateway from "./Gateway";
import Sensor from "./Sensor";

export default abstract class Device {
    // Atributes
    private id: number;
    private name: string;
    private gateway: Gateway;
    private sensors: Sensor[];
    private deviceEUI: string;
    private coords: [latitude: number, longitude: number];
    private status: boolean;

     // Constructor
     constructor( args?: {id: number, name: string, gateway: Gateway, deviceEUI: string, coords: [number, number], status: boolean, sensors?: Sensor[]}) {
        if (args) {
            this.id = args.id;
            this.name = args.name;
            this.gateway = args.gateway;
            this.deviceEUI = args.deviceEUI;
            this.coords = args.coords;
            this.status = args.status;
            
            if(args.sensors) {
                this.sensors = args.sensors;
            }
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
     * Getter of the Name atribute
     * 
     * @returns 
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Getter of the Gateway atribute
     * 
     * @returns 
     */
    public getGateway(): Gateway {
        return this.gateway;
    }

    /**
     * Getter of the DeviceEUI atribute
     * 
     * @returns 
     */
    public getDeviceEUI(): string {
        return this.deviceEUI;
    }

    /**
     * Getter of the Coords atribute
     * 
     * @returns 
     */
    public getCoords(): [number, number] {
        return this.coords
    }

    /**
     * Getter of the Coords.latitude atribute
     * 
     * @returns 
     */
    public getLatitude(): number {
        return this.coords[0];
    }

    /**
     * Getter of the Coords.longitude atribute
     * 
     * @returns 
     */
    public getLongitude(): number {
        return this.coords[1];
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
     * Setter of the name atribute
     * 
     * @param name 
     */
    public setName(name: string): void {
        this.name = name;
    }

    /**
     * Setter of the gateway atribute
     * 
     * @param gateway 
     */
    public setGateway(gateway: Gateway): void {
        this.gateway = gateway;
    }

    public setDeviceEUI(deviceEUI: string): void {
        this.deviceEUI = deviceEUI;
    }

    /**
     * Setter of the Coords atribute
     * 
     * @param coords 
     */
    public setCoords(coords: [number, number]): void {
        this.coords = coords;
    }

    /**
     * Setter of the Coords.latitude atribute
     * 
     * @param latitude 
     */
    public setLatitude(latitude: number): void {
        this.coords[0] = latitude;
    }

    /**
     * Setter of the Coords.longitude atribute
     * 
     * @param longitude 
     */
    public setLongitude(longitude: number): void {
        this.coords[1] = longitude;
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