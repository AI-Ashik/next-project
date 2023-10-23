import React from "react";
import styles from "@/app/styles/thestyle.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "abcae72163msh6cdc303c3262430p14d78djsne12ff2941c8e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  console.log(main_data);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          {" "}
          Netflix \ <span>{main_data.type}</span>
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              height={300}
              width={600}
            />
          </div>
          <div>
            <h2>{main_data.title}</h2>
            <p>{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
