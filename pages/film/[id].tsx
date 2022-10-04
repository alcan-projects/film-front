import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// types
import { FilmType } from "../../src/interfaces/Film";

// styled
import { FilmStyled } from "../../src/styles/film";

const Film: NextPage = () => {
  const { query } = useRouter();
  const [data, setDate] = useState<FilmType>();
  const url = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${url}/films/${query.id}`)
      .then((res) => {
        console.log(res);
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
