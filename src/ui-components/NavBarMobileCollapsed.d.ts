/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LearnLogoProps } from "./LearnLogo";
import { FlexProps } from "@aws-amplify/ui-react";
import { MenuIconProps } from "./MenuIcon";
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
export declare type NavBarMobileCollapsedOverridesProps = {
    NavBarMobileCollapsed?: PrimitiveOverrideProps<FlexProps>;
    "Frame 396"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 327"?: PrimitiveOverrideProps<FlexProps>;
    LearnLogo?: LearnLogoProps;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    MenuIcon?: MenuIconProps;
} & EscapeHatchProps;
export declare type NavBarMobileCollapsedProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarMobileCollapsedOverridesProps | undefined | null;
}>;
export default function NavBarMobileCollapsed(props: NavBarMobileCollapsedProps): React.ReactElement;
