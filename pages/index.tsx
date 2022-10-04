/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

// components
import NavBar from "../src/components/navbar";

// style
import { HomeStyled } from "../src/styles/home";

import axios from "axios";
import { useEffect, useState } from "react";

// types
import { FilmType } from "../src/interfaces/Film";
import Head from "next/head";

const Home: NextPage = () => {
  const [data, setData] = useState<Array<FilmType>>();
  const url = "http://localhost:5000"; // "http://157.230.91.29:5000";

  useEffect(() => {
    axios
      .get(`${url}/films`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>DPlay free</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Animalify" key="Animalify" />
        <meta property="og:title" content="Animalify" key="Animalify" />

        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      <NavBar />
      <HomeStyled>
        <section>
          {data &&
            data.map((item, index) => (
              <Link href={`/film/${item._id}`} key={index}>
                <div className="boxed">
                  <div>
                    <img
                      src={item.image}
                      alt={`Capo do filme ${item.image} no dia new ${Date()}`}
                    />
                    <p>{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
        </section>
      </HomeStyled>
    </>
  );
};

export default Home;
