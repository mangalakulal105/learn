import { View, Flex, Button } from "@aws-amplify/ui-react";
import { useState } from "react";
import styles from "./GlobalNav.module.scss";
import { NavMenuIconType } from "./components/icons/IconLink";
import { RightNavLinks } from "./components/RightNavLinks";
import { AmplifyNavLink } from "./components/AmplifyNavLink";
import { LeftNavLinks } from "./components/LeftNavLinks";
import { ChevronIcon } from "./components/icons";

export enum NavMenuItemType {
  DEFAULT = "DEFAULT",
  EXTERNAL = "EXTERNAL",
  ICON = "ICON",
}

export interface NavMenuItem {
  type: NavMenuItemType;
  label: string;
  url: string;
  order: number;
  icon?: NavMenuIconType | string;
}

export interface NavProps {
  leftLinks: NavMenuItem[];
  rightLinks: NavMenuItem[];
  socialLinks: NavMenuItem[];
  currentSite: string;
  secondaryNavDesktop: any;
  secondaryNavMobile: any;
}

export function GlobalNav({
  currentSite,
  leftLinks,
  rightLinks,
  socialLinks,
  secondaryNavDesktop,
  secondaryNavMobile,
}: NavProps) {
  const themeableSites: any = {
    "UI Library": true,
  };

  // This class will be added onto the sites that aren't using an Amplify UI theme provider, this will let those using a ThemeProvider use the variables
  // provided and the sites not using a ThemeProvider will have the needed variables added on
  const themeClass = themeableSites[currentSite] ? "" : "use-ui-theme";

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);

  return (
    <View className={styles["navbar"]}>
      <View
        className={`${styles["dev-center-navbar"]} ${
          themeClass ? styles[themeClass] : ""
        }`}
      >
        <Flex
          style={{ display: showSecondaryNav ? "none" : "flex" }}
          className={styles["nav-links-container"]}
        >
          <Flex
            height="100%"
            id="left-nav"
            className={styles["left-nav-links"]}
          >
            <AmplifyNavLink
              currentSite={currentSite}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
            <LeftNavLinks
              isCollapsed={isCollapsed}
              leftLinks={leftLinks}
              currentSite={currentSite}
              showSecondaryNav={showSecondaryNav}
              setShowSecondaryNav={setShowSecondaryNav}
            />
          </Flex>
          <RightNavLinks
            rightLinks={rightLinks}
            socialLinks={socialLinks}
            currentSite={currentSite}
            isCollapsed={isCollapsed}
          />
        </Flex>
        <Flex
          style={{ display: showSecondaryNav ? "flex" : "none" }}
          className={styles["nav-links-container"]}
        >
          <Flex
            height="100%"
            id="left-nav"
            className={styles["left-nav-links"]}
          >
            <AmplifyNavLink
              currentSite={currentSite}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
            <Flex
              direction="column"
              gap="0px"
              className={isCollapsed ? styles["collapsed-menu"] : ""}
            >
              <Button
                onClick={() => {
                  setShowSecondaryNav(false);
                }}
                gap="10px"
                className={styles["secondary-nav-button"]}
              >
                <ChevronIcon rotateDeg="90" />
                All Amplify sites
              </Button>
              {secondaryNavMobile}
            </Flex>
          </Flex>
        </Flex>
        <View
          className={isCollapsed ? "" : styles["background-overlay"]}
          onClick={() => {
            setIsCollapsed(true);
          }}
        ></View>
      </View>
      <View className={styles["secondary-nav"]}>{secondaryNavDesktop}</View>
    </View>
  );
}
