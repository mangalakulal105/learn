/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBar } from "../models";
import { LearnLogoProps } from "./LearnLogo";
import { ButtonProps, FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { LearnMenuItemProps } from "./LearnMenuItem";
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
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 327"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 405"?: PrimitiveOverrideProps<ViewProps>;
    LearnLogo?: LearnLogoProps;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    LearnMenuItem31473021?: LearnMenuItemProps;
    "Frame 407"?: PrimitiveOverrideProps<FlexProps>;
    LearnMenuItem31473022?: LearnMenuItemProps;
    "Frame 408"?: PrimitiveOverrideProps<FlexProps>;
    LearnMenuItem31473023?: LearnMenuItemProps;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    navBar?: NavBar;
} & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
