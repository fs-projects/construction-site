import React from "react";
import styles from "./App.module.css";
import catalog from "./catalog";

function App() {
  console.log("1111", catalog);
  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav>
          <div className={styles.navContainer}>
            <div className={styles.navHeading}>RENTAL MANAGEMENT SYSTEM</div>
            <div className={styles.navMenu}>
              <span className={styles.navMenuName}>Select Location</span>
              <ul>
                <li>ILLINOIS</li>
                <li>INDIANA</li>
                <li>KENTUCKY</li>
                <li>NEW JERSEY</li>
                <li>OHIO</li>
                <li>PENNSYLVANIA</li>
                <li>TEXAS</li>
                <li>WEST VIRGINIA</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainContentHeading}>
            WELCOME TO RENTAL MANAGEMENT SYSTEM
          </h1>
          <p className={styles.mainContentSelectLocation}>
            Please select a location
          </p>
        </div>
      </div>
      <footer className={`${styles.footer} ${styles.footerMod}`}>
        <div className={styles.footerContainer}>
          <a href="www.google.com">Contact us</a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
