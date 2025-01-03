import styled from "styled-components";
import { BREAKPOINTS } from "@/constants";

export const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListHeader = styled.h1`
  font-size: var(--font-size-huge);
  color: var(--color-rose-900);
`;

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.3rem 1.5rem;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${BREAKPOINTS.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
