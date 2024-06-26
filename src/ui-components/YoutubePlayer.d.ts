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
export declare type YoutubePlayerOverridesProps = {
    YoutubePlayer?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ViewProps>;
    shadows?: PrimitiveOverrideProps<ViewProps>;
    bottom?: PrimitiveOverrideProps<ViewProps>;
    top?: PrimitiveOverrideProps<ViewProps>;
    "Frame 380"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 378"?: PrimitiveOverrideProps<FlexProps>;
    "ico-play"?: PrimitiveOverrideProps<IconProps>;
    "ico-next"?: PrimitiveOverrideProps<IconProps>;
    path31473073?: PrimitiveOverrideProps<ViewProps>;
    path31473074?: PrimitiveOverrideProps<IconProps>;
    "ico-sound"?: PrimitiveOverrideProps<IconProps>;
    path31473076?: PrimitiveOverrideProps<IconProps>;
    path31473077?: PrimitiveOverrideProps<IconProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    "Frame 379"?: PrimitiveOverrideProps<FlexProps>;
    "ico-titles"?: PrimitiveOverrideProps<IconProps>;
    path31473081?: PrimitiveOverrideProps<ViewProps>;
    path31473082?: PrimitiveOverrideProps<IconProps>;
    path31473083?: PrimitiveOverrideProps<IconProps>;
    "ico-hd"?: PrimitiveOverrideProps<FlexProps>;
    "ico-gear"?: PrimitiveOverrideProps<IconProps>;
    path31473086?: PrimitiveOverrideProps<IconProps>;
    path31473087?: PrimitiveOverrideProps<IconProps>;
    background?: PrimitiveOverrideProps<ViewProps>;
    HD?: PrimitiveOverrideProps<IconProps>;
    "ico-theater"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "ico-tv"?: PrimitiveOverrideProps<IconProps>;
    path31473094?: PrimitiveOverrideProps<IconProps>;
    "ico-broadcast"?: PrimitiveOverrideProps<IconProps>;
    "ico-fullscreen"?: PrimitiveOverrideProps<IconProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "play button"?: PrimitiveOverrideProps<ViewProps>;
    path31473099?: PrimitiveOverrideProps<IconProps>;
    path31473100?: PrimitiveOverrideProps<IconProps>;
    "Video Title"?: PrimitiveOverrideProps<TextProps>;
    "ico-info"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type YoutubePlayerProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: YoutubePlayerOverridesProps | undefined | null;
}>;
export default function YoutubePlayer(props: YoutubePlayerProps): React.ReactElement;
