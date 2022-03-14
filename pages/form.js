import styles from "../styles/form.module.css";

export default function Form() {
  return (
    <>
      <div className={styles.title}>Create your own Pokémon</div>
      <form className={styles.form}>
        <label className={styles.cat}>Name: </label>
        <input type="text" placeholder="Charizard" className={styles.input} />
        <label className={styles.cat}>Hp: </label>
        <input type="text" placeholder="77" className={styles.input} />
        <label className={styles.cat}>Attack: </label>
        <input type="text" placeholder="77" className={styles.input} />
        <label className={styles.cat}>Defense: </label>
        <input type="text" placeholder="77" className={styles.input} />
        <label className={styles.cat}>Special-Attack: </label>
        <input type="text" placeholder="77" className={styles.input} />
        <label className={styles.cat}>Special-Defense: </label>
        <input type="text" placeholder="77" className={styles.input} />
        <label className={styles.cat}>Speed: </label>
        <input type="text" placeholder="77" className={styles.input} />
        <button className={styles.button}>Create Pokémon</button>
      </form>
    </>
  );
}
