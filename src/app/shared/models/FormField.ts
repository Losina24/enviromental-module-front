/**
 * Name: FormField.ts
 * Date: 25 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to manage form fields
 */

export default class FormField {
  // Atributes
  private label: string;
  private placeholder: string;
  private required: boolean;
  private type: string;
  private name: string;
  private options: [number, string][];
  private value: string;

  // Constructor
  constructor(
    label: string,
    placeholder: string,
    type: string,
    name: string,
    required: boolean = true,
    options?: [number, string][]
  ) {
    this.label = label;
    this.placeholder = placeholder;
    this.required = required;
    this.type = type;
    this.name = name;

    if (options) {
      this.options = options;
    }
  }

  // Methods
  /**
   * Returns the element's label
   * getLabel() -> Text
   *
   * @returns label
   */
  public getLabel(): string {
    return this.label;
  }

  /**
   * Returns the element's name
   * getName() -> Text
   *
   * @returns name
   */
   public getName(): string {
    return this.name;
  }

  /**
   * Returns the element's placeholder
   * getPlaceholder() -> Text
   *
   * @returns placeholder
   */
  public getPlaceholder(): string {
    return this.placeholder;
  }

  /**
   * Returns the element's required
   * getPlaceholder() -> T/F
   *
   * @returns required
   */
  public isRequired(): boolean {
    return this.required;
  }

  /**
   * Returns the element's type
   * getType() -> InputType
   *
   * @returns InputType
   */
  public getType(): string {
    return this.type;
  }

  /**
   * Returns the element's options
   * getOptions() -> [(Z, Text)]
   *
   * @returns Options
   */
  public getOptions(): [number, string][] {
    return this.options;
  }

  /**
   * Returns the input's value
   * getValue() -> Text
   * 
   * @returns Value
   */
  public getValue(): string {
    return this.value
  }

  /**
   * Set the element's label
   * Text -> setLabel() ->
   *
   * @param label
   */
  public setLabel(label: string): void {
    this.label = label;
  }

  /**
   * Set the element's name
   * Text -> setName() ->
   *
   * @param name
   */
   public setName(name: string): void {
    this.name = name;
  }

  /**
   * Set the element's placeholder
   * Text -> setPlaceholder() ->
   *
   * @param placeholder
   */
  public setPlaceholder(placeholder: string): void {
    this.placeholder = placeholder;
  }

  /**
   * Set the element's required
   * Text -> setRequired() ->
   *
   * @param required
   */
  public setRequired(required: boolean): void {
    this.required = required;
  }

  /**
   * Set the element's type
   * Text -> setType() ->
   *
   * @param type
   */
  public setType(type: string): void {
    this.type = type;
  }

  /**
   * Set the element's type
   * [[number, string]] -> setOptions() ->
   *
   * @param type
   */
  public setOptions(options: [number, string][]): void {
    this.options = options;
  }

  /**
   * Set the input's value
   * Text -> setValue() ->
   * 
   * @param value 
   */
  public setValue(value: string) {
    this.value = value
  }
}
