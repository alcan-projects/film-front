import styled from 'styled-components';

export const FilmStyled = styled('div')`
    display: block;
    article {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 1em 0;

        iframe {
            width: 60%;
            min-height: 500px;
        }
    }

    .description {
        padding: 0 15%;
        color: white;
        font-size: 14px;
        text-align: justify;
    }
`;
