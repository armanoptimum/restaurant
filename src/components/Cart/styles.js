import styled from "styled-components";
import { BREAKPOINTS } from "@/constants";

export const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  background-color: var(--color-light);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
  height: fit-content;

  @media (min-width: ${BREAKPOINTS.smallTablet}) {
    min-width: 21rem;
  }
`;

export const NonEmptyCard = styled.div`
  display: ${({ $empty }) => (!$empty ? "flex" : "none")};
  flex-direction: column;
  gap: 1.3rem;
`;

export const CartHeader = styled.h1`
  font-size: var(--font-size-large);
  color: var(--color-red);
`;

export const CartMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  text-align: center;
  padding: 0.3rem;
  background-color: var(--color-rose-10);
  font-size: var(--font-size-extra-extra-small);
  font-weight: var(--font-weight-regular);
  border-radius: var(--border-radius-medium);
  white-space: nowrap;

  @media (min-width: ${BREAKPOINTS.mobile}) {
    font-size: var(--font-size-extra-small);
    padding: 1rem;
  }
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPrice = styled.h1`
  font-size: var(--font-size-medium);
  color: var(--color-rose-900);
`;

export const TotalPriceMessage = styled.p`
  font-size: var(--font-size-small);
  color: var(--color-rose-900);
`;

export const EmptyCart = styled.div`
  display: ${({ $empty }) => ($empty ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const EmptyCardMessage = styled.h1`
  color: var(--color-rose-500);
  font-size: var(--font-size-extra-small);
  white-space: nowrap;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: var(--font-size-small);
  }
`;
