import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = days[props.date.getDay()];
  const dayNumber = props.date.getDate();
  const monthName = months[props.date.getMonth()];
  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {dayName} {getOrdinal(dayNumber)}, {monthName} {hour}:{minutes}
    </span>
  );
}
