/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LearnLogoProps } from "./LearnLogo";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { CloseIconProps } from "./CloseIcon";
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
export declare type NavBarMobileExpandedOverridesProps = {
    NavBarMobileExpanded?: PrimitiveOverrideProps<FlexProps>;
    "Frame 396"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 327"?: PrimitiveOverrideProps<FlexProps>;
    LearnLogo?: LearnLogoProps;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    CloseIcon?: CloseIconProps;
    "Rectangle 13"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 397"?: PrimitiveOverrideProps<FlexProps>;
    LearnMenuItem31472989?: LearnMenuItemProps;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 400"?: PrimitiveOverrideProps<FlexProps>;
    LearnMenuItem31472992?: LearnMenuItemProps;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 401"?: PrimitiveOverrideProps<FlexProps>;
    LearnMenuItem31472995?: LearnMenuItemProps;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NavBarMobileExpandedProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarMobileExpandedOverridesProps | undefined | null;
}>;
export default function NavBarMobileExpanded(props: NavBarMobileExpandedProps): React.ReactElement;
