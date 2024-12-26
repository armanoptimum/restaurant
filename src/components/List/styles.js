import styled from "styled-components";


export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 70%;
`

export const ListHeader = styled.h1`
    font-size: var(--font-size-huge);
    color: var(--color-rose-900);
`

export const ListItems = styled.div`
     display: grid;
     grid-template-columns: repeat(1, 1fr);
     gap: 1.5rem;
    
     @media (min-width: 60rem) {
        grid-template-columns:  repeat(3, 1fr)
     }
`