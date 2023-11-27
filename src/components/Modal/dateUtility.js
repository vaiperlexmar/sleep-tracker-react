"use strict";

const date = "11/09/2023";
const sleepTime = "12:15 AM";
const wakeTime = "08:20 AM";

function hoursAdapter(time) {
  return time.slice(6, 8) === "PM"
    ? +time.slice(0, 2) + 12 // Hours after noon is more by 12 hours
    : time.slice(6, 8) === "AM" && +time.slice(0, 2) === 12 // Exception of 12 AM
      ? 0
      : +time.slice(0, 2); // Default value
}

function msToHours(ms) {
  return (ms / (1000 * 60 * 60)).toFixed(1);
}

function gapFinder(date, sleepTime, wakeTime) {
  const sleepDate = new Date(date);
  const wakeDate = new Date(date);

  const sleepHours = hoursAdapter(sleepTime);
  const wakeHours = hoursAdapter(wakeTime);

  sleepDate.setHours(sleepHours);
  sleepDate.setMinutes(sleepTime.slice(3, 5));

  wakeDate.setHours(wakeHours);
  wakeDate.setMinutes(wakeTime.slice(3, 5));

  const isNextDay =
    sleepTime.slice(6, 8) === "PM" &&
    wakeTime.slice(6, 8) === "AM" &&
    sleepDate.getDate()
      ? true
      : false;

  if (isNextDay) {
    wakeDate.setDate(sleepDate.getDate() + 1);
    console.log(wakeDate);
  }

  return msToHours(wakeDate.getTime() - sleepDate.getTime());
}

export { gapFinder };
