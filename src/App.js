import './App.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [favColor, setFavColor] = useState('...');

  useEffect(() => {
    const getFavColor = async () => {
      const URL = "http://" + process.env.EXPRESS_SERVICE_HOST + ":" + process.env.EXPRESS_SERVICE_PORT + "/test";
      const res = await fetch(URL);
      console.log("URL is: " + URL);
      console.log(res);
      const favColor = await res.json();
      setFavColor(favColor);
    };

    getFavColor();
  }, []);

  return (
    <div className={styles.container}>
      <head>
        <title>On port {process.env.EXPRESS_SERVICE_PORT || '...'}</title>
      </head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My favourite color is is <a href="#">{favColor}</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}