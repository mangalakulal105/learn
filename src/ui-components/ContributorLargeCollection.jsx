/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import ContributorLarge from "./ContributorLarge";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function ContributorLargeCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ContributorLargeCollection")}
      {...rest}
    >
      {(item, index) => (
        <ContributorLarge
          contributor={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ContributorLarge>
      )}
    </Collection>
  );
}
