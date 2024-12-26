import Image from "next/image";
import styled from "styled-components";

export const DesertStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-medium);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -58%);
`;

export const DesertInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const DesertFullName = styled.h1`
  font-size: var(--font-size-small);
  color: var(--color-rose-900);
  font-weight: var(--font-weight-semibold);
`;

export const DesertPrice = styled.h1`
  font-size: var(--font-size-small);
  color: var(--color-red);
  font-weight: var(--font-weight-semibold);
`;

export const DesertName = styled.h2`
  font-size: var(--font-size-extra-small);
  color: var(--color-rose-500);
  font-weight: var(--font-weight-semibold);
`;
