import styles from "./Type.module.css";

const Type = () => {
  const types = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h3>Browse by property type</h3>
      <div className={styles.list}>
        {types.map((type, i) => (
          <div key={i}>
            <img src={type.image} alt="" />
            <div className={styles.text}>
              <h4>{type.name}</h4>
              <p>{type.count} hotels</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
