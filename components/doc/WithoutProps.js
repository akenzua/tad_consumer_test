import React, { useState, useEffect, useContext } from "react";

const WithoutProps = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState();

  // manage opening hours
  useEffect(() => {
    const day = date.getDay();
    const hour = date.getHours();

    if (day == 0) {
      // sunday
      setOpen(false);
    } else if (day == 6) {
      // saturday
      hour >= 8 && hour < 15 ? setOpen(true) : setOpen(false);
    } else if (hour >= 8 && hour < 18) {
      //  weekdays between 8am and 6pm
      setOpen(true);
    } else {
      // weekdays outside opening hours
      setOpen(false);
    }
  });

  return (
    <button disabled={!open}>
      We are {open ? "Opened" : "Closed"} without props
    </button>
  );
};

export default WithoutProps;
