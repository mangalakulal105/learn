/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CloseIconOverridesProps = {
    CloseIcon?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 3"?: PrimitiveOverrideProps<IconProps>;
    "Vector 4"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type CloseIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CloseIconOverridesProps | undefined | null;
}>;
export default function CloseIcon(props: CloseIconProps): React.ReactElement;
