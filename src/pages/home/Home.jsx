import NavBar from "../shared-components/Navbar/NavBar";
import Header from "./components/Header/Header";
import City from "./components/List/City/City";
import Type from "./components/List/PropertyType/Type";
import HotelList from "./components/List/HotelList/HotelList";
import Form from "../shared-components/Form/Form";
import Footer from "../shared-components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.head}>
        <NavBar />
        <Header />
      </div>
      <div className={styles.lists}>
        <City />
        <Type />
        <HotelList />
      </div>
      <div className={styles.form}>
        <Form />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
