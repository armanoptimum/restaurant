import styled, { css } from "styled-components";
import { BUTTON_STYLES } from "./constants";
import Image from "next/image";
import { BREAKPOINTS } from "@/constants";

const buttonStyles = {
  [BUTTON_STYLES.PRIMARY]: css`
    padding: 1rem 5rem;
    color: var(--color-rose-50);
    justify-content: center;
    border: none;
    background-color: var(--color-red);
    &:hover {
      background-color: var(--color-red-hover);
    }

    @media (min-width: ${BREAKPOINTS.mobile}) {
      padding: 1rem 7rem;
    }
  `,

  [BUTTON_STYLES.CART]: css`
    padding: 0.6rem 1rem;
    color: var(--color-rose-900);
    background-color: var(--color-rose-00);
    justify-content: center;
    border: 0.09rem solid var(--color-rose-400);
    gap: 0.5rem;

    &:hover {
      color: var(--color-red);
      border-color: var(--color-red);
    }
  `,

  [BUTTON_STYLES.CART_ACTIVE]: css`
    padding: 0.6rem 1rem;
    color: var(--color-rose-50);
    background-color: var(--color-red);
    justify-content: space-between;
    border: none;
  `,
};

export const ButtonStyled = styled.button`
  ${({ $style }) => buttonStyles[$style || BUTTON_STYLES.PRIMARY]}
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  cursor: pointer;
  min-width: 10rem;
  min-height: 2.7rem;
  border-radius: var(--border-radius-large);
  transition: all 0.2s ease-in-out;
`;

export const IconWrapper = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.063rem solid white;
  border-radius: var(--border-radius-circle);
  min-height: 1rem;
  min-width: 1rem;
  padding: 0.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
  }
`;
