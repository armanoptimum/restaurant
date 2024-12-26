import styled from "styled-components";


export const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--color-light);
    padding: 1.5rem;
    border-radius: var(--border-radius-medium);
    height: fit-content;
`

export const CartHeader = styled.h1`
    font-size: var(--font-size-large);
    color: var(--color-red);
`