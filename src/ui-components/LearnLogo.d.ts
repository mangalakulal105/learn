/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LearnLogoOverridesProps = {
    LearnLogo?: PrimitiveOverrideProps<FlexProps>;
    logo?: PrimitiveOverrideProps<ViewProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    "Fill 1"?: PrimitiveOverrideProps<IconProps>;
    Path31472874?: PrimitiveOverrideProps<IconProps>;
    Path31472875?: PrimitiveOverrideProps<IconProps>;
    "Amplify Admin UI"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LearnLogoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LearnLogoOverridesProps | undefined | null;
}>;
export default function LearnLogo(props: LearnLogoProps): React.ReactElement;
