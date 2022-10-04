/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

// components
import NavBar from "../src/components/navbar";

// style
import { HomeStyled } from "../src/styles/home";

import axios from "axios";
import { useEffect, useState } from "react";
import ENV from "./env";

// types
import { FilmType } from "../src/interfaces/Film";
import Head from "next/head";

const Home: NextPage = () => {
  const [data, setData] = useState<Array<FilmType>>();

  useEffect(() => {
    axios
      .get(`${ENV.API_URL}/films`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
