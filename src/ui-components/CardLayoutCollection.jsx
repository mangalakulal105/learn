/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import CardLayout from "./CardLayout";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function CardLayoutCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "CardLayoutCollection")}
      {...rest}
    >
      {(item, index) => (
        <CardLayout
          height="auto"
          width="auto"
          margin="0 0px 0px 0"
          course={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardLayout>
      )}
    </Collection>
  );
}
