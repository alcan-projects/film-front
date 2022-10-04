import styled from 'styled-components';

export const HomeStyled = styled('article')`
    section {
        display: flex;
        flex-wrap: wrap;
        padding: 1em;
        .boxed {
            width: 12.8%;
            display: flex;
            margin: 0 1%;
            border: solid 1px rgb(74, 74, 74);
            padding: 0.8%;
            cursor: pointer;
            border-radius: 5px;
            div {
                text-decoration: none;
                img {
                    border-radius: 5px;
                    width: 100%;
                }
                p {
                    color: white;
                }
            }
            &:hover {
                background-color: rgb(56, 56, 56);
            }
        }
    }
`;
