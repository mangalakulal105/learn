/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { MadeLabelProps } from "./MadeLabel";
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
export declare type LearnFooterOverridesProps = {
    LearnFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    AWS_designsystem_dark?: PrimitiveOverrideProps<FlexProps>;
    Shape?: PrimitiveOverrideProps<IconProps>;
    Path31472936?: PrimitiveOverrideProps<IconProps>;
    Path31472937?: PrimitiveOverrideProps<IconProps>;
    Path31472938?: PrimitiveOverrideProps<IconProps>;
    Path31472939?: PrimitiveOverrideProps<IconProps>;
    Path31472940?: PrimitiveOverrideProps<IconProps>;
    Path31472941?: PrimitiveOverrideProps<IconProps>;
    "The Learn Amplify is supported by Amazon Web Services \u00A9 2022, Amazon Web Services, Inc. or its affiliates. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
    MadeLabel?: MadeLabelProps;
    "Frame 384"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 377"?: PrimitiveOverrideProps<FlexProps>;
    LearnSocialBorderless31472969?: LearnSocialBorderlessProps;
    LearnSocialBorderless31472970?: LearnSocialBorderlessProps;
    LearnSocialBorderless31472971?: LearnSocialBorderlessProps;
    LearnSocialBorderless31472972?: LearnSocialBorderlessProps;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LearnFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LearnFooterOverridesProps | undefined | null;
}>;
export default function LearnFooter(props: LearnFooterProps): React.ReactElement;
