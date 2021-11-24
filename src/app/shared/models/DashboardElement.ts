/**
 * Name: DashboardElement.ts
 * Date: 24 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Abstract class used to generalize different dashboard elements
 */

export default abstract class DashboardElement {
    // Atributes
    private title: string;
    private link: string;
    protected content: number;

    // Constructor
    constructor(){}

    // Methods
    /**
     * Set the title of the dashboard element
     * Text -> setTitle() -> 
     * 
     * @param title The dashboard element's title
     */
    public setTitle( title:string ):void {
        this.title = title
    }

    /**
     * Returns the title of the dashboard element
     * getTitle() -> string
     * 
     * @returns Title
     */
     public getTitle():string {
        return this.title
    }

    /**
     * Set the link of the dashboard element
     * Text -> setLink() -> 
     * 
     * @param link The dashboard element's link
     */
     public setLink( link:string ):void {
        this.link = link
    }

    /**
     * Returns the link of the dashboard element
     * getLink() -> string
     * 
     * @returns Title
     */
     public getLink():string {
        return this.link
    }

    /**
     * Set the content of the dashboard element
     * Z -> setContent() ->
     * 
     * @param content The dashboard element's title
     */
    abstract setContent( content:number ): void

    /**
     * Returns the content of the dashboard element
     * getContent() -> number
     * 
     * @returns Content
     */
    abstract getContent(): number
}