import React, { Fragment } from "react";
import Firms from "../components/firms";
import { withTranslation } from "../components/translation/i18n";
import { getFirms, getAlgoFirms } from "../components/firms/actions";
import { useSelector, useDispatch } from "react-redux";

const Listings = (props) => {
  // const f = useSelector((state) => state.firms.firms);
  // console.log(props);
  return (
    <Fragment>
      <Firms />
      {/* <p>{props.custom}</p> */}
      {/* <h2>Firms</h2> */}
      {/* {f.map((firm, i) => {
        return (
          <div key={i}>
            <h3>{firm.company}</h3>
            <h5>Get in touch</h5>
            <p>{firm.online[0].phone}</p>
            <p>{firm.online[0].email}</p>
            <p>{firm.online[0].website}</p>
          </div>
        );
      })} */}
    </Fragment>
  );
};

// Listings.getInitialProps = async ({ reduxStore, store }) => {
//   await reduxStore.dispatch(getAlgoFirms());

//   return {
//     custom: "csghgij",
//   };
// };

export default withTranslation("listings")(Listings);
