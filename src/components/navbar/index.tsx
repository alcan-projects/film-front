// styled
import { NavBarStyled } from "./style";

import Logo from "../../../public/favicon.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <NavBarStyled>
      <div className="logo">
        <Image src={Logo} alt="logo da DplayFREE" />
        <h1>PLAY</h1>
        <span>FREE</span>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
