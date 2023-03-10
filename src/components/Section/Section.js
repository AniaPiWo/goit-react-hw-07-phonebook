import css from './Section.module.css';

export const Section = ({ children }) => (
  <section className={css.section}>
    <h2 className={css.title}>Phone Book</h2>
    {children}
  </section>
);
