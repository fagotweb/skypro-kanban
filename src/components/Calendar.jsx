import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import { CalendarPeriod, StyledCalendarWrapper } from "./Calendar.styles.js";

registerLocale("ru", ru);

function Calendar({ selectedDate, setSelectedDate, readOnly }) {
  const formatDateForDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };

  return (
    <div className="pop-new-card__calendar calendar">
      <p
        className="calendar__ttl subttl"
        style={{ marginBottom: "14px", padding: "0 7px" }}
      >
        Даты
      </p>
      <div className="calendar__block" style={{ display: "block" }}>
        <StyledCalendarWrapper>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            locale="ru"
            readOnly={readOnly}
          />
        </StyledCalendarWrapper>
        <CalendarPeriod>
          <p className="calendar__p">
            Выберите срок исполнения:{" "}
            <span className="date-control">
              {formatDateForDisplay(selectedDate)}
            </span>
          </p>
        </CalendarPeriod>
      </div>
    </div>
  );
}

export default Calendar;
