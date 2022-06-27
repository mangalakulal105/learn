import { DataStore, Hub } from "aws-amplify";
import {
  AmplifyProvider,
  Flex,
  Placeholder,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { default as CardLayoutCollection } from "../../ui-components/CardLayoutCollectionCustom";
import { Course } from "../../models";
import { useEffect, useState } from "react";
import { HeroCourse } from "../HeroCourse";

export function HomePageContent() {
  const [heroCourse, setHeroCourse] = useState<Course>({ id: "" });
  const [isLoading, setIsLoading] = useState(true);

  const cardLayoutCollectionVariant = useBreakpointValue({
    base: "list",
    small: "list",
    medium: "list",
    large: "grid",
  }) as "list" | "grid";

  async function getHomePageContent() {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen("datastore", async (capsule) => {
      const {
        payload: { event, data },
      } = capsule;

      if (event === "ready") {
        const featuredCourse = await DataStore.query(Course, (c) =>
          c.isFeatured("eq", true)
        );

        if (featuredCourse.length === 1) {
          setHeroCourse(featuredCourse[0]);
          setIsLoading(false);
        }
      }
    });

    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();

    return () => {
      removeListener();
    };
  }

  useEffect(() => {
    getHomePageContent();
  }, []);

  return (
    <Flex
      direction="column"
      gap={{
        base: "64px",
        small: "64px",
        medium: "64px",
        large: "124px",
      }}
      marginTop={{
        base: "32px",
        small: "32px",
        medium: "64px",
        large: "128px",
      }}
    >
      {isLoading ? (
        <>
          <Placeholder isLoaded={!isLoading} />
        </>
      ) : (
        <HeroCourse course={heroCourse} />
      )}
      <AmplifyProvider>
        <CardLayoutCollection type={cardLayoutCollectionVariant} gap="40px" isOnHomePage={true}/>
      </AmplifyProvider>
    </Flex>
  );
}
