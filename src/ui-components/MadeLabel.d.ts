/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AmplifyBorderLogoProps } from "./AmplifyBorderLogo";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { HeartIconProps } from "./HeartIcon";
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
export declare type MadeLabelOverridesProps = {
    MadeLabel?: PrimitiveOverrideProps<FlexProps>;
    AmplifyBorderLogo?: AmplifyBorderLogoProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 386"?: PrimitiveOverrideProps<FlexProps>;
    "Made with"?: PrimitiveOverrideProps<TextProps>;
    HeartIcon?: HeartIconProps;
    "in Amplify"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MadeLabelProps = React.PropsWithChildren<Partial<FlexProps> & {
    isActive?: "false" | "true";
    isHover?: "false" | "true";
} & {
    overrides?: MadeLabelOverridesProps | undefined | null;
}>;
export default function MadeLabel(props: MadeLabelProps): React.ReactElement;
