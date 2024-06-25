/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ContributorVerticalProps } from "./ContributorVertical";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type ContributorVerticalCollectionOverridesProps = {
    ContributorVerticalCollection?: PrimitiveOverrideProps<CollectionProps>;
    ContributorVertical?: ContributorVerticalProps;
} & EscapeHatchProps;
export declare type ContributorVerticalCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ContributorVerticalProps;
} & {
    overrides?: ContributorVerticalCollectionOverridesProps | undefined | null;
}>;
export default function ContributorVerticalCollection(props: ContributorVerticalCollectionProps): React.ReactElement;
