import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-light);
  padding: 2rem;
  border-radius: var(--border-radius-medium);

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 34rem;
    transform: translate(-50%, -50%);
    height: auto;
  }
`;

export const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ModalTitle = styled.h1`
  color: var(--color-rose-900);
  font-size: var(--font-size-huge);
`;

export const ModalMessage = styled.p`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-regular);
  color: var(--color-rose-500);
`;

export const ModalOrders = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-medium);
  padding: 1rem;
  gap: 1.5rem;
  background-color: var(--color-rose-10);
`;
