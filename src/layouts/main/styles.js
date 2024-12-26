import { BREAKPOINTS } from "@/constants";
import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--spacing-main);
  gap: 2rem;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
  }
`;
