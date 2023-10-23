import styles from "./Header.module.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";

const Header = () => {
  const toSearchPage = () => window.location.replace("/search");

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  // Đóng Modal bằng nút Escape
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setIsOpen(false);
  });

  return (
    <div className={styles.header}>
      <h1>A lifetime of discount? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button>Sign in / Register</button>
      <div className={styles.search}>
        <div>
          <input placeholder="Where are you going?" />
          <span className={styles.icon}>
            <i className="fa-solid fa-bed"></i>
          </span>
        </div>
        <div>
          <input
            readOnly
            onClick={() => setIsOpen(true)}
            value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
              range[0].endDate,
              "dd/MM/yyyy"
            )}`}
          />
          <span className={styles.icon}>
            <i className="fa-solid fa-calendar-days"></i>
          </span>
        </div>
        <div>
          <input placeholder="1 adult・0 children・1 room" />
          <span className={styles.icon}>
            <i className="fa-solid fa-person"></i>
          </span>
        </div>
        <button onClick={toSearchPage}>Search</button>
      </div>

      {/* Phần nâng cao */}
      {isOpen && (
        <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          className={styles.date}
          minDate={new Date()}
          onChange={(item) => setRange([item.selection])}
          ranges={range}
        />
      )}
    </div>
  );
};

export default Header;
