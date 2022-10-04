import styled from "styled-components";

export const NavBarStyled = styled('header')`
    padding: 1em;
    background-color: rgb(18, 17, 17);
    .logo {
        display: flex;
        align-items: center;
        img {
            height: 40px !important;
        }
        h1 {
            font-size: 30px;
            color: white;
            padding-left: 10px;
        }
        span {
            color: #aaa;
            font-size: 8px;
            margin-top: 16px;
        }
    }
`