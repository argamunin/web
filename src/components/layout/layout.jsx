import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.children}>
        {children}
      </div>
      <Footer/>
    </div>
  );
}
