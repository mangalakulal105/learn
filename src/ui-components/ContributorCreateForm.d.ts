/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContributorCreateFormInputValues = {
    jobTitle?: string;
    bio?: string;
    profilePic?: string;
    username?: string;
    lastName?: string;
    firstName?: string;
};
export declare type ContributorCreateFormValidationValues = {
    jobTitle?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    profilePic?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContributorCreateFormOverridesProps = {
    ContributorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    jobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContributorCreateFormProps = React.PropsWithChildren<{
    overrides?: ContributorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContributorCreateFormInputValues) => ContributorCreateFormInputValues;
    onSuccess?: (fields: ContributorCreateFormInputValues) => void;
    onError?: (fields: ContributorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContributorCreateFormInputValues) => ContributorCreateFormInputValues;
    onValidate?: ContributorCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContributorCreateForm(props: ContributorCreateFormProps): React.ReactElement;
