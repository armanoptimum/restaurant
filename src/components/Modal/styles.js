import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

export const ModalWrapper = styled.div``;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  max-height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-light);
  padding: 2rem;
  border-radius: var(--border-radius-medium);
  z-index: 1000;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 30rem;
    transform: translate(-50%, -30%);
    height: auto;
    max-height: 35rem;
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
  padding: 1.5rem;
  gap: 1rem;
  background-color: var(--color-rose-10);
  overflow-y: auto;
`;
