import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.header`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        display: none;
    }
    
    button {
        display: block;
    }

    button {
        font-size: 1rem;
        color: #FFF;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }

    @media screen and (max-width: 720px) {
        max-width: 80vw;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;

        button {
            display: none;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1rem;
            height: 1rem;
            background: var(--blue-light);
            color: #FFF;
            padding: 1.5rem;
            border-radius: 50%;
            font-size: 2rem;
            font-weight: 400;

            &:hover {
            filter: brightness(0.9)
        }
        }
    }
`;
