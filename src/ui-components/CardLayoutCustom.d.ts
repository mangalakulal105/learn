/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Course } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type CardLayoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    course?: Course;
} & {
    isOnHomePage?: boolean;
} &{
    isActive?: "false" | "true";
    isHover?: "false" | "true";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardLayout(props: CardLayoutProps): React.ReactElement;
