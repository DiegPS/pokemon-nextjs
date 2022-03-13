import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ pokemons }) {
  return (
    <>
      <div>
        <ul className={styles.grid}>
          {pokemons.map((pokemon, i) => {
            return (
              <Link
                href={{
                  pathname: "/[name]",
                  query: { name: pokemon.name },
                }}
                key={i}
              >
                <li key={i} className={`${styles.card}  ${pokemon.types[0]}`}>
                  <h3 className={styles.name}>{pokemon.name}</h3>
                  <h4 className={styles.types}>{pokemon.types[0]}</h4>
                  {pokemon.types[1] ? (
                    <h4 className={styles.types}>{pokemon.types[1]}</h4>
                  ) : null}

                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className={styles.image}
                  />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const getPokemon = async (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      response.json()
    );
  };
  let pokemons = [];
  for (let i = 1; i <= 20; i++) {
    let data = await getPokemon(i);
    pokemons.push(data);
  }
  pokemons = pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types.map((type) => type.type.name),
    };
  });
  return {
    props: {
      pokemons,
    },
  };
}
