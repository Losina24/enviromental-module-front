/**
 * Name: FormElement.ts
 * Date: 25 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to generate form components
 */

import FormField from './FormField';

export default class FormElement {
  // Atributes
  private formFields: FormField[];

  // Constructor
  constructor(formFields: FormField[]) {
    this.formFields = formFields;
  }

  // Methods
  public getFormFieldLabels(): string[] {
    let labels: string[] = [];

    this.formFields.forEach((element) => {
      labels.push(element.getLabel());
    });

    return labels;
  }

  public getPlaceholderFieldValues(): string[] {
    let placeholders: string[] = [];

    this.formFields.forEach((element) => {
      placeholders.push(element.getPlaceholder());
    });

    return placeholders;
  }

  public getTypeFieldValues(): string[] {
    let type: string[] = [];

    this.formFields.forEach((element) => {
      type.push(element.getType());
    });

    return type;
  }

  public getFormFields(): FormField[] {
    return this.formFields;
  }
}
