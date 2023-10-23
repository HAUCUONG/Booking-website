import styles from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  return (
    <div className={styles.list_item}>
      <div className={styles.image}>
        <img src={props.image_url} alt="" />
      </div>
      <div className={styles.hotel_info}>
        <h3>{props.name}</h3>
        <p>{props.distance} from center</p>
        <p>{props.tag}</p>
        <p>{props.description}</p>
        <p>{props.type}</p>
        <div className={`${!props.free_cancel && styles.hidden}`}>
          <p>Free cancellation</p>
          <p>You can cancel later, so lock in this great price today!</p>
        </div>
      </div>
      <div className={styles.rating}>
        <div>
          <span>{props.rate_text}</span>
          <span>{props.rate}</span>
        </div>
        <div>
          <p>${props.price}</p>
          <p>Includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
