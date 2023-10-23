import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div>
        <input type="email" placeholder="Your email" />
        <button type="button">Subscribe</button>
      </div>
    </form>
  );
};

export default Form;
