/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Course } from "../models";
import { ButtonProps, FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HeroLayoutMobileOverridesProps = {
    HeroLayoutMobile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 389"?: PrimitiveOverrideProps<FlexProps>;
    "NEW COURSE"?: PrimitiveOverrideProps<TextProps>;
    "Line 7 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    Advanced?: PrimitiveOverrideProps<TextProps>;
    "Line 8 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "2h 36m"?: PrimitiveOverrideProps<TextProps>;
    "Build fullstack mobile applications with Amplify"?: PrimitiveOverrideProps<TextProps>;
    "Frame 57"?: PrimitiveOverrideProps<FlexProps>;
    Button31473035?: PrimitiveOverrideProps<ButtonProps>;
    Button31473036?: PrimitiveOverrideProps<ButtonProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada."?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    Button31473039?: PrimitiveOverrideProps<ButtonProps>;
    Button31473040?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type HeroLayoutMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    course?: Course;
    level?: String;
} & {
    overrides?: HeroLayoutMobileOverridesProps | undefined | null;
}>;
export default function HeroLayoutMobile(props: HeroLayoutMobileProps): React.ReactElement;
