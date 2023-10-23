import NavBarItem from "./NavBarItem";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navBarItems = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  return (
    <div className={styles.navbar}>
      <div>
        <p>Booking Website</p>
        <div>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <nav>
        <ul>
          {navBarItems.map((item, i) => (
            <NavBarItem
              type={item.type}
              icon={item.icon}
              active={item.active}
              key={i}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
