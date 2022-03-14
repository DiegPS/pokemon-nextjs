import styles from "../styles/form.module.css";

export default function Form() {
  return (
    <>
      <div className={styles.title}>Create your own Pokémon</div>
      <form className={styles.form}>
        <label>Pokémon name: </label>
        <input type="text" placeholder="Charizard" />
        <label>Hp: </label>
        <input type="text" placeholder="77" />
        <label>Attack: </label>
        <input type="text" placeholder="77" />
        <label>Defense: </label>
        <input type="text" placeholder="77" />
        <label>Special-Attack: </label>
        <input type="text" placeholder="77" />
        <label>Special-Defense: </label>
        <input type="text" placeholder="77" />
        <label>Speed: </label>
        <input type="text" placeholder="77" />
        <button>Create Pokémon</button>
      </form>
    </>
  );
}
