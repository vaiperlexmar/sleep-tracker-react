import React, { useState } from "react";
import WhiteContainer from "../WhiteContainer";
import Button from "../Button/Button";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers";
import { gapFinder } from "./dateUtility";
import dayjs from "dayjs";

export default function Modal({ active, setActive }) {
  const [date, setDate] = useState(
    dayjs(
      `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}`,
    ),
  );
  const [sleepTime, setSleepTime] = useState();
  const [wakeTime, setWakeTime] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    // 0 date 3 time sleep 6 wake time

    const date = event.target[0].value;
    const sleepTime = event.target[3].value;
    const wakeTime = event.target[6].value;

    const timeOfSleeping = gapFinder(date, sleepTime, wakeTime);
  }

  function resetForm(event) {
    event.preventDefault();

    setDate("null");
    setSleepTime("null");
    setWakeTime("null");
  }

  return (
    <div
      className={`modal text-center ${active ? "scale-100" : "scale-0"}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      onClick={() => setActive(false)}
    >
      <WhiteContainer onClick={(e) => e.stopPropagination()}>
        <header className="grid-cols mb-8 grid grid-flow-col items-center gap-2">
          <h1 className="font-serif text-4xl font-bold">Make a new entry</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <DatePicker
              label="Choose date of sleep entry"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            ></DatePicker>
          </div>
          <div className="mb-4">
            <TimePicker
              label="Choose a sleep time 💤"
              value={sleepTime}
              onChange={(newValue) => setSleepTime(newValue)}
            />
          </div>
          <div className="mb-8">
            <TimePicker
              label="Choose a wake time 🌄"
              value={wakeTime}
              onChange={(newValue) => setWakeTime(newValue)}
            />
          </div>

          <Button text={"Submit"} className="btn btn-purple" />
        </form>
        <Button
          text={"Reset"}
          onClick={resetForm}
          className={"btn btn-white"}
        />
      </WhiteContainer>
    </div>
  );
}
