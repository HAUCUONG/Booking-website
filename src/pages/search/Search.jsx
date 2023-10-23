import NavBar from "../shared-components/Navbar/NavBar";
import SearchPopup from "./components/search-popup/SearchPopup";
import SearchList from "./components/search-list/SearchList";
import Footer from "../shared-components/Footer/Footer";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.body}>
        <SearchPopup />
        <SearchList />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
