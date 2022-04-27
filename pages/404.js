import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <main>
      <section className={styles.errorContainer}>
        <span>4</span>
        <span>
          <span className={styles.screenReaderText}>0</span>
        </span>
        <span>4</span>
        <div>
          <p className="mb-8 lg:mb-3 font-semibold text-slate-700 dark:text-slate-200">
            Page not found. Please check if you have the correct URL.
          </p>
        </div>
      </section>
    </main>
  );
}
