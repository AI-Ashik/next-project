import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/thestyle.module.css";

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "abcae72163msh6cdc303c3262430p14d78djsne12ff2941c8e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h2>Movies and TV Shows</h2>
          <div className={styles.card_section}>
            {main_data.map((curElement) => {
              return <MovieCard key={curElement.id} {...curElement} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
