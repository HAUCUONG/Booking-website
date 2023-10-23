import styles from "./City.module.css";

const City = () => {
  const cities = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];

  return (
    <div className={styles.list}>
      {cities.map((city, i) => (
        <div key={i}>
          <img src={city.image} alt="" />
          <div className={styles.text}>
            <h1>{city.name}</h1>
            <h3>{city.subText}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;
