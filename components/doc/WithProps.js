import React, { useState, useEffect } from "react";

const WithProps = (time) => {
  const [date, setDate] = useState(time);
  const [open, setOpen] = useState();

  // console.log(date.time);

  // manage opening hours
  useEffect(() => {
    const day = date.time.getDay();
    const hour = date.time.getHours();
    // console.log(day);
    // console.log(hour);
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
      We are {open ? "Opened" : "Closed"} with props
    </button>
  );
};

export default WithProps;
