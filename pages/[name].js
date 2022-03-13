import styles from "../styles/details.module.css";
export default function PokemonDetails({ data }) {
  return (
    <>
      <card className={styles.card}>
        <h1 className={styles.text}>{data.name}</h1>
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
          className={styles.img}
        />
        <div className={styles.content}>
          <p className={styles.text}>{data.stats[0].stat.name}</p>
          <p className={styles.text}>{data.stats[0].base_stat}</p>
          <p className={styles.text}>{data.stats[1].stat.name}</p>
          <p className={styles.text}>{data.stats[1].base_stat}</p>
          <p className={styles.text}>{data.stats[2].stat.name}</p>
          <p className={styles.text}>{data.stats[2].base_stat}</p>
          <p className={styles.text}>{data.stats[3].stat.name}</p>
          <p className={styles.text}>{data.stats[3].base_stat}</p>
          <p className={styles.text}>{data.stats[4].stat.name}</p>
          <p className={styles.text}>{data.stats[4].base_stat}</p>
          <p className={styles.text}>{data.stats[5].stat.name}</p>
          <p className={styles.text}>{data.stats[5].base_stat}</p>
        </div>
      </card>
    </>
  );
}
export async function getServerSideProps(context) {
  const { name } = context.params;
  const data = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  ).json();
  return {
    props: {
      data,
    },
  };
}
