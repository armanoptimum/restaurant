import styled from "styled-components";

export const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  background-color: var(--color-light);
  padding: 1.5rem;
  border-radius: var(--border-radius-medium);
  height: fit-content;
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
  padding: 1rem;
  background-color: var(--color-rose-10);
  font-size: var(--font-size-extra-small);
  font-weight: var(--font-weight-regular);
  border-radius: var(--border-radius-medium);
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPrice = styled.h1`
  font-size: var(--font-size-large);
  color: var(--color-rose-900);
`;

export const TotalPriceMessage = styled.p`
  font-size: var(--font-size-small);
  color: var(--color-rose-900);
`;
