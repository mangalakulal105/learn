import { useRouter } from "next/router";
import { DataStore } from "aws-amplify";
import { LessonLayout } from "../../../../components/LessonLayout";
import { Course, Lesson } from "../../../../models";
import { useCallback, useEffect, useState } from "react";
import { YoutubeEmbed } from "../../../../components/YoutubeEmbed";
import {
  Placeholder,
  Text,
  useBreakpointValue,
  View,
} from "@aws-amplify/ui-react";
import { LessonTableOfContents } from "../../../../components/LessonTableOfContents";
import { useFirstDatastoreQuery } from "../../../../hooks/useFirstDatastoreQuery";
import { LearnMarkdown } from "../../../../components/LearnMarkdown";
import { CoursesRouteLayout } from "../../../../components/CoursesRouteLayout";

const LessonPage = () => {
  const router = useRouter();
  const {
    coursetitle,
    lesson: lessonNumber,
  }: { coursetitle?: string; lesson?: string } = router.query;

  // Get the course title without the appended id
  const courseIdPrefix = coursetitle?.substring(
    coursetitle?.lastIndexOf("-") + 1,
    coursetitle.length
  );

  const [course, setCourse] = useState<Course | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const showInSidebarBreakpoint = useBreakpointValue({
    base: false,
    small: false,
    medium: false,
    large: true,
    xl: true,
  });

  async function getLesson() {
    if (courseIdPrefix && lessonNumber) {
      const courseResults = await DataStore.query(Course, (c) =>
        c.id("beginsWith", courseIdPrefix)
      );

      const courseResult = courseResults[0];
      setCourse(courseResult);

      if (courseResult) {
        const lessonResults = await DataStore.query(Lesson, (l) =>
          l
            .lessonCourseLessonId("eq", courseResult.id)
            .lessonNumber("eq", Number(lessonNumber))
        );

        const lessonResult = lessonResults[0];
        console.log("lesson", lessonResult);

        if (lessonResult && lessonResult.id) {
          setIsLoaded(true);
          setLesson(lessonResult);
        }
      }
    }
  }

  const getLessonCallback = useCallback(getLesson, [
    courseIdPrefix,
    lessonNumber,
  ]);

  useFirstDatastoreQuery(getLessonCallback);

  useEffect(() => {
    getLessonCallback();
  }, [getLessonCallback]);

  if (isLoaded) {
    return (
      <CoursesRouteLayout>
        <LessonLayout
          course={course}
          mainChildren={
            <View as="div">
              {lesson?.youtubeEmbedId && (
                <View marginBottom="32px">
                  <YoutubeEmbed embedId={lesson?.youtubeEmbedId as string} />
                </View>
              )}
              <View as="div">
                <Text fontWeight="400" fontSize="1.25rem">
                  {course?.title}
                </Text>
                <Text fontWeight="300" fontSize="2.5rem">
                  {lesson?.title}
                </Text>
              </View>
              {!showInSidebarBreakpoint && (
                <View marginTop="32px">
                  <LessonTableOfContents
                    currentLesson={lessonNumber}
                    courseId={course?.id as string}
                  />
                </View>
              )}
              <View as="div" marginTop="64px">
                <LearnMarkdown markdownContent={lesson?.content as string} />
              </View>
            </View>
          }
          sidebarChildren={
            <LessonTableOfContents
              currentLesson={lessonNumber}
              courseId={course?.id as string}
            />
          }
        />
      </CoursesRouteLayout>
    );
  } else {
    return <Placeholder isLoaded={isLoaded} />;
  }
};

export default LessonPage;