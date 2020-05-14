import { Footer } from "@moneypensionservice/directories";
import { i18n } from "../translation/i18n";
import { withTranslation } from "../translation/i18n";

const PageFooter = (props) => {
  console.log(props);

  return <Footer currentLgn={i18n.language} />;
};
export default withTranslation("common")(PageFooter);
