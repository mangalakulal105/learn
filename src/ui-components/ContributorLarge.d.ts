/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Contributor } from "../models";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ContributorLargeOverridesProps = {
    ContributorLarge?: PrimitiveOverrideProps<FlexProps>;
    "Frame 360"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 15"?: PrimitiveOverrideProps<IconProps>;
    "Frame 331"?: PrimitiveOverrideProps<FlexProps>;
    "Jane Doe"?: PrimitiveOverrideProps<TextProps>;
    "Developer Advocate"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContributorLargeProps = React.PropsWithChildren<Partial<FlexProps> & {
    contributor?: Contributor;
} & {
    property1?: "Vertical";
    property2?: "Large";
    property3?: "false" | "true";
    property4?: "false" | "true";
} & {
    overrides?: ContributorLargeOverridesProps | undefined | null;
}>;
export default function ContributorLarge(props: ContributorLargeProps): React.ReactElement;
