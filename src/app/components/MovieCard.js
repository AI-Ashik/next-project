import React from "react";
import styles from "@/app/styles/thestyle.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElement) => {
  const { id, type, title, synopsis, backgroundImage } = curElement.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={backgroundImage.url}
            alt={title}
            width={260}
            height={200}
          />
          <div className={styles.card_data}>
            <h2>{title.substring(0, 10)}</h2>
            <p>{`${synopsis.substring(0, 66)}...`}</p>
            <Link href={`/movie/${id}`}>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
