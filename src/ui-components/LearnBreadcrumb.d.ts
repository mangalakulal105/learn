/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LearnBreadcrumbOverridesProps = {
    LearnBreadcrumb?: PrimitiveOverrideProps<FlexProps>;
    Button31473057?: PrimitiveOverrideProps<ButtonProps>;
    "chevron-right31473058"?: PrimitiveOverrideProps<ViewProps>;
    Button31473059?: PrimitiveOverrideProps<ButtonProps>;
    "chevron-right31473060"?: PrimitiveOverrideProps<ViewProps>;
    Button31473061?: PrimitiveOverrideProps<ButtonProps>;
    "chevron-right31473062"?: PrimitiveOverrideProps<ViewProps>;
    Button31473063?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LearnBreadcrumbProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LearnBreadcrumbOverridesProps | undefined | null;
}>;
export default function LearnBreadcrumb(props: LearnBreadcrumbProps): React.ReactElement;
