import styles from "./NavBarItem.module.css";

const NavBarItem = (props) => {
  const isActive = props.active;

  return (
    <li className={`${styles.list} ${isActive && styles.active}`}>
      <span>
        <i className={`fa-solid ${props.icon}`}></i>
      </span>
      <span>{props.type}</span>
    </li>
  );
};

export default NavBarItem;
