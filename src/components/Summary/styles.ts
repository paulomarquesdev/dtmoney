import styled from 'styled-components';

export const Container = styled.div`
    @media screen and (max-width: 720px) {
        display: grid;
        grid-template-columns: 1fr;
    }

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        color: var(--text-title);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        &:last-child {
            background: var(--green);
            color: #FFF;
        }
    
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    
        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`;