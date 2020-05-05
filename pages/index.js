import { Fragment } from "react";
import PropTypes from "prop-types";

import { i18n, Link, withTranslation } from "../components/translation/i18n";
import { MainCard, ContentCard, VideoCard } from "../components/Styles/Cards";
import {
  HeadingOne,
  HeadingFour,
  HeadingThree,
  HeadingTwo,
  LinkText,
} from "../components/Styles/Text";
import { Button } from "../components/Styles/Button";
import { UnorderedList, ListItems } from "../components/Styles/List";

const Homepage = ({ t }) => {
  return (
    <Fragment>
      <MainCard justify="space-between">
        <ContentCard max="700px">
          <HeadingOne align="left">
            {t("travel.home.banner.heading")}
          </HeadingOne>
        </ContentCard>
        <ContentCard justify="left" pr="0" pl="0" max="350px">
          <Link href="/pos">
            <LinkText align="left">{t("travel.home.banner.register")}</LinkText>
          </Link>
        </ContentCard>
      </MainCard>
      <MainCard justify="space-between" background="true">
        <ContentCard max="600px" justify="left" flex="1 0 40%" background>
          <HeadingTwo align="left">
            {t("travel.home.conditions.heading")}
          </HeadingTwo>
          <UnorderedList>
            {t("travel.home.conditions.questions", { returnObjects: true }).map(
              ({ answer, sign }, i) => (
                <ListItems sign={sign} key={i}>
                  {answer}
                </ListItems>
              )
            )}
          </UnorderedList>
          <Button primary="true">{t("travel.home.conditions.button")}</Button>
        </ContentCard>
        <ContentCard
          border="1px solid #d5d8d8"
          justify="left"
          mt="50px"
          pl="2%"
        >
          <HeadingThree>{t("travel.home.about.heading")}</HeadingThree>
          <UnorderedList>
            {t("travel.home.about.details", { returnObjects: true }).map(
              ({ answer, sign }, i) => (
                <ListItems
                  sign={sign}
                  key={i}
                  bb="1px solid #d5d8d8"
                  pb="7px"
                  pt="7px"
                >
                  {answer}
                </ListItems>
              )
            )}
          </UnorderedList>
        </ContentCard>
      </MainCard>
    </Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
