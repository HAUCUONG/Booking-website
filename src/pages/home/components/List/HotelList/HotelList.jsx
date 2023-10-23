import styles from "./HotelList.module.css";

const HotelList = () => {
  const hotels = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h3>Homes guests love</h3>
      <div className={styles.list}>
        {hotels.map((hotel, i) => (
          <div key={i}>
            <img src={hotel.image_url} alt="" />
            <div className={styles.text}>
              <h4>
                <a href="/detail">{hotel.name}</a>
              </h4>
              <p>{hotel.city} hotels</p>
              <p>
                <strong>Starting from ${hotel.price}</strong>
              </p>
              <div>
                <span>{hotel.rate}</span>
                <span>{hotel.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
