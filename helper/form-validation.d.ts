export interface FormValidationConfig {
    validClass: string;
    validFeedbackClass: string;
    invalidClass: string;
    invalidFeedbackClass: string;
    defaultMinLength: number;
}

export default class FormValidation {
    static config: FormValidationConfig;

    constructor(config?: Partial<FormValidationConfig>);

    config: FormValidationConfig;
    errorMessages: Map<string, string>;
    validators: Map<string, (value: string, field: HTMLElement) => boolean>;

    addValidator(validatorName: string, validationFunction: (value: string, field: HTMLElement) => boolean, errorMessage?: string): boolean;
    addErrorMessage(validatorName: string, errorMessage: string): boolean;
    setConfig(key: string, value: any): void;
    validateForm(form: HTMLFormElement, formFields?: NodeListOf<HTMLElement>): false | HTMLElement[];
    validateField(field: HTMLElement): false | string[];
    validateRequired(value: string, field: HTMLElement): boolean;
    validateEmail(value: string): boolean;
    validateConfirmation(value: string, field: HTMLElement): boolean;
    validateMinLength(value: string, field: HTMLElement): boolean;
    validateGrecaptcha(value: string, field: HTMLElement): boolean;
    setFieldValid(field: HTMLElement): void;
    setFieldInvalid(field: HTMLElement, validationErrors: string[]): void;
    setFieldNeutral(field: HTMLElement): void;
    setFieldRequired(field: HTMLElement): void;
    setFieldNotRequired(field: HTMLElement): void;
    setFieldValidationMessage(field: HTMLElement, validationErrors: string[]): boolean;
    resetFieldFeedback(field: HTMLElement): boolean;
    checkVisibility(el: HTMLElement): boolean;
    setNoValidate(el: HTMLElement): void;
    isFormElement(el: HTMLElement): boolean;
}
