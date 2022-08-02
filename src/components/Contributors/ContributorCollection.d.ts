/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type ContributorCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: ({ item: any, index: number }: {
        item: any;
        index: any;
    }) => Record<string, string>;
} & {
    useLargeVariant: boolean
} & {
    filter?: any
} & {
    limit?: number
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ContributorCollection(props: ContributorCollectionProps): React.ReactElement;
