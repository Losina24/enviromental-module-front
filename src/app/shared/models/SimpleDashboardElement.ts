/**
 * Name: DashboardElement.ts
 * Date: 24 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to generate dahsboard components
 */
import DashboardElement from "./DashboardElement"; 

export default class SimpleDashboardElement extends DashboardElement {
     
     // Atributes
     private icon: string;

	// Methods
	/**
     * Returns the content of the dashboard element
     * getContent() -> Z
     * 
     * @returns Content
     */
	public getContent(): number | string {
		return this.content
	}

	/**
     * Set the content of the dashboard element
     * Z -> setContent() -> 
     * 
     * @param content The dashboard element's content
     */
	public setContent( content: number | string ): void {
		this.content = content
	}

     /**
     * Returns the icon of the dashboard element
     * getIcon() -> Text
     * 
     * @returns Icon
     */
	public getIcon(): string {
		return this.icon
	}

	/**
     * Set the icon of the dashboard element
     * Z -> setIcon() -> 
     * 
     * @param icon The dashboard element's content
     */
	public setIcon( icon: string ): void {
		this.icon = icon
	}
}
