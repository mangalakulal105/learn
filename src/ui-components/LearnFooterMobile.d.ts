/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { HeartIconProps } from "./HeartIcon";
import { LearnSocialBorderlessProps } from "./LearnSocialBorderless";
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
export declare type LearnFooterMobileOverridesProps = {
    LearnFooterMobile?: PrimitiveOverrideProps<FlexProps>;
    AWS_designsystem_dark?: PrimitiveOverrideProps<FlexProps>;
    Shape?: PrimitiveOverrideProps<IconProps>;
    Path33513221?: PrimitiveOverrideProps<IconProps>;
    Path33513222?: PrimitiveOverrideProps<IconProps>;
    Path33513223?: PrimitiveOverrideProps<IconProps>;
    Path33513224?: PrimitiveOverrideProps<IconProps>;
    Path33513225?: PrimitiveOverrideProps<IconProps>;
    Path33513226?: PrimitiveOverrideProps<IconProps>;
    "The Learn Amplify is supported by Amazon Web Services \u00A9 2022, Amazon Web Services, Inc. or its affiliates. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
    "Frame 388"?: PrimitiveOverrideProps<FlexProps>;
    MadeLabel?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "Amplify-Border-Logo"?: PrimitiveOverrideProps<ViewProps>;
    Subtract?: PrimitiveOverrideProps<IconProps>;
    "Vector 52"?: PrimitiveOverrideProps<IconProps>;
    "Vector 53"?: PrimitiveOverrideProps<IconProps>;
    "Combined Shape"?: PrimitiveOverrideProps<IconProps>;
    "Fill 1"?: PrimitiveOverrideProps<IconProps>;
    Path33513260?: PrimitiveOverrideProps<IconProps>;
    Path33513261?: PrimitiveOverrideProps<IconProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 386"?: PrimitiveOverrideProps<FlexProps>;
    "Made with"?: PrimitiveOverrideProps<TextProps>;
    HeartIcon?: HeartIconProps;
    "in Amplify"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 389"?: PrimitiveOverrideProps<FlexProps>;
    LearnSocialBorderless33513269?: LearnSocialBorderlessProps;
    LearnSocialBorderless33513270?: LearnSocialBorderlessProps;
    LearnSocialBorderless33513271?: LearnSocialBorderlessProps;
    LearnSocialBorderless33513272?: LearnSocialBorderlessProps;
} & EscapeHatchProps;
export declare type LearnFooterMobileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LearnFooterMobileOverridesProps | undefined | null;
}>;
export default function LearnFooterMobile(props: LearnFooterMobileProps): React.ReactElement;
