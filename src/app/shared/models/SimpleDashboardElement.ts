/**
 * Name: DashboardElement.ts
 * Date: 24 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to generate dahsboard components
 */
import DashboardElement from "./DashboardElement"; 

export default class SimpleDashboardElement extends DashboardElement {
	
	// Methods
	/**
     * Returns the content of the dashboard element
     * getContent() -> number
     * 
     * @returns Content
     */
	public getContent(): number {
		return this.content
	}

	/**
     * Set the content of the dashboard element
     * Z -> setContent() -> 
     * 
     * @param title The dashboard element's content
     */
	public setContent( content: number ): void {
		this.content = content
	}
}
