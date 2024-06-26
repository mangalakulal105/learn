/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Course } from "../models";
import { ButtonProps, DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HeroLayoutOverridesProps = {
    HeroLayout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 389"?: PrimitiveOverrideProps<FlexProps>;
    "NEW COURSE"?: PrimitiveOverrideProps<TextProps>;
    Divider33082631?: PrimitiveOverrideProps<DividerProps>;
    Advanced?: PrimitiveOverrideProps<TextProps>;
    Divider33082633?: PrimitiveOverrideProps<DividerProps>;
    "2h 36m"?: PrimitiveOverrideProps<TextProps>;
    "Build fullstack mobile applications with Amplify"?: PrimitiveOverrideProps<TextProps>;
    "Frame 57"?: PrimitiveOverrideProps<FlexProps>;
    Button31473050?: PrimitiveOverrideProps<ButtonProps>;
    Button31473051?: PrimitiveOverrideProps<ButtonProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada."?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    Button31473054?: PrimitiveOverrideProps<ButtonProps>;
    Button31473055?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeroLayoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    course?: Course;
} & {
    variation?: "default" | "mobile";
} & {
    overrides?: HeroLayoutOverridesProps | undefined | null;
}>;
export default function HeroLayout(props: HeroLayoutProps): React.ReactElement;
