import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ENV from "../env";

// types
import { FilmType } from "../../src/interfaces/Film";

// styled
import { FilmStyled } from "../../src/styles/film";

const Film: NextPage = () => {
  const { query } = useRouter();
  const [data, setDate] = useState<FilmType>();

  useEffect(() => {
    axios
      .get(`${ENV.API_URL}/films/${query.id}`)
      .then((res) => {
        console.log(res.data);
        setDate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query.id]);

  return (
    <FilmStyled>
      <div className="anuncios"></div>
      <article id="video">{<iframe src={data?.video}></iframe>}</article>
      <div className="anuncios"></div>
      <div className="description">{data?.description}</div>
    </FilmStyled>
  );
};

export default Film;
