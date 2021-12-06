/**
 * Name: ListActions.ts
 * Date: 25 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to generate list action buttons
 */

export default class ListActions {

  // Atributes
  private actions: string[] = [];
  private URLs: string[] = [];
  private id: number;

  // Constructor
  constructor(actions: string[], id: number, URLs?: string[]) {
    this.actions = actions;
    this.id = id;
    
    if(URLs) this.URLs = URLs;
  }

  // Methods
  /**
   * Get action names
   * getActions() -> Text[]
   *
   * @returns
   */
  public getActions(): string[] {
    return this.actions;
  }

  /**
   * Get action URLs
   * getURLs() -> Text[]
   *
   * @returns
   */
   public getURLs(): string[] {
    return this.URLs;
  }

  /**
   * Get actions ID
   * getId() -> N
   *
   * @returns
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Change the actions to new ones
   * Text[] -> setActions() ->
   * 
   * @param actions 
   */
  public setActions(actions: string[]) {
    this.actions = actions;
  }

  /**
   * Change the URLs to new ones
   * Text[] -> setURLs() ->
   * 
   * @param actions 
   */
   public setURLs(urls: string[]) {
    this.URLs = urls;
  }

  /**
   * Set the ID
   * N -> setId() ->
   * 
   * @param id 
   */
  public setId(id: number) {
    this.id = id;
  }
}
