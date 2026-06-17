import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import styled from "styled-components";

registerLocale("ru", ru);

export const StyledCalendarWrapper = styled.div`
   width: 182px;
  margin-bottom: 12px;

  .react-datepicker {
    font-family: inherit;
    border: none;
    background-color: transparent;
    width: 100%;
  }

 .react-datepicker__header {
    background-color: transparent;
    border-bottom: none;
    padding: 0 7px;
  }

  .react-datepicker__current-month {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    margin-bottom: 7px;
    text-align: left; 
  }

  .react-datepicker__day-names {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0;
  }

  .react-datepicker__day-name {
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
    width: 22px;
    text-align: center;
    margin: 0;
  }

  .react-datepicker__month {
    width: 182px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px; 
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day {
    width: 22px;
    height: 22px;
    margin: 0; 
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #eaedf2;
      color: #151b26;
    }
  }

  .react-datepicker__day--selected {
    background-color: #94a6be !important;
    color: #ffffff !important;
    font-weight: 600;
  }

  .react-datepicker__day--today {
    font-weight: 700;
    border: 1px solid #94a6be;
  }

  .react-datepicker__day--outside-month {
    color: #94a6be;
    opacity: 0.3;
  }

  .react-datepicker__navigation {
    top: 2px;
    height: 22px;
    width: 22px;
    padding: 0;
  }

  .react-datepicker__navigation--previous {
    right: 24px;
    left: auto;
  }

  .react-datepicker__navigation--next {
    right: 2px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #94a6be;
    border-width: 1.5px 1.5px 0 0;
    width: 5px;
    height: 5px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  .calendar__p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    margin: 0;
  }

  .date-control {
    color: #000000;
    font-weight: 500;
  }
`;

