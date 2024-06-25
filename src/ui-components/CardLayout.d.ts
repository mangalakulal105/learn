/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Course } from "../models";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CardLayoutOverridesProps = {
    CardLayout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 395"?: PrimitiveOverrideProps<ViewProps>;
    "mohammad-rahmani-xV1peKnrlMY-unsplash 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 118"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 389"?: PrimitiveOverrideProps<FlexProps>;
    COURSE?: PrimitiveOverrideProps<TextProps>;
    Divider33082635?: PrimitiveOverrideProps<DividerProps>;
    Advanced?: PrimitiveOverrideProps<TextProps>;
    Divider33082637?: PrimitiveOverrideProps<DividerProps>;
    "2h 36m"?: PrimitiveOverrideProps<TextProps>;
    "Build fullstack mobile applications with Amplify"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada."?: PrimitiveOverrideProps<TextProps>;
    "Frame 58"?: PrimitiveOverrideProps<FlexProps>;
    Button31473172?: PrimitiveOverrideProps<ButtonProps>;
    Button31473173?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CardLayoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    course?: Course;
} & {
    isActive?: "false" | "true";
    isHover?: "false" | "true";
} & {
    overrides?: CardLayoutOverridesProps | undefined | null;
}>;
export default function CardLayout(props: CardLayoutProps): React.ReactElement;
