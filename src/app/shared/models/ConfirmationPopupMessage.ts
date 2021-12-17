/**
 * Name: ConfirmationPopupMessage.ts
 * Date: 06 - 12 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to manage the message that the user will see 
 */


export default class ConfirmationPopupMessage {

    // Atributes
    private title: string;
    private description: string;
    private link: string;

    // Constructor
    constructor(title: string, description: string, link: string) {
        this.title = title;
        this.description = description;
        this.link = link;
    }

    // Methods
    /**
     * Get the title
     * getTitle() -> Text
     * 
     * @returns 
     */
     public getTitle(): string {
        return this.title;
    }

    /**
     * Get the description
     * getDescription() -> Text
     * 
     * @returns 
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Get the link
     * getLink() -> Text
     * 
     * @returns 
     */
     public getLink(): string {
        return this.link;
    }

    /**
     * Set the title value
     * Text -> setTitle() ->
     * 
     * @param title 
     */
     public setTitle(title: string) {
        this.title = title;
    }

    /**
     * Set the description value
     * Text -> setDescription() ->
     * 
     * @param description 
     */
     public setDescription(description: string) {
        this.description = description;
    }

    /**
     * Set the link value
     * Text -> setLink() ->
     * 
     * @param link 
     */
     public setLink(link: string) {
        this.link = link;
    }
}