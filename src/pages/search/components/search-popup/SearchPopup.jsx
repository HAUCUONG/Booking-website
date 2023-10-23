import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={styles.container}>
      <h3>Search</h3>
      <form className={styles.form}>
        <div className={styles.search_info}>
          <div className={styles.title}>Destination</div>
          <input type="text" />
        </div>
        <div className={styles.search_info}>
          <div className={styles.title}>Check-in Date</div>
          <input type="text" placeholder="06/24/2022 to 06/24/2022" />
        </div>
        <div className={styles.search_info}>
          <div className={styles.title}>Options</div>
          <div>
            <span>Min price per night</span>
            <input type="text" />
          </div>
          <div>
            <span>Max price per night</span>
            <input type="text" />
          </div>
          <div>
            <span>Adult</span>
            <input type="text" placeholder="1" />
          </div>
          <div>
            <span>Children</span>
            <input type="text" placeholder="0" />
          </div>
          <div>
            <span>Room</span>
            <input type="text" placeholder="1" />
          </div>
        </div>
      </form>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
