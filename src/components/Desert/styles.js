import { BREAKPOINTS } from "@/constants";
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

export const ImageStyled = styled.div`
 border-radius: var(--border-radius-medium);
 background-image: url(${({ $mobile }) => $mobile?.src});
 background-size: cover;
 background-position: center;


width: ${({ $mobile }) => $mobile?.width ? `${(0.4 * $mobile.width) / 16}rem` : '100%'};
height: ${({ $mobile }) => $mobile?.height ? `${(0.4 * $mobile.height) / 16}rem` : 'auto'};

@media (min-width: ${BREAKPOINTS.tablet}) {
    width: ${({ $tablet }) =>
      $tablet?.width ? `${(0.7 * $tablet.width) / 16}rem` : '100%'};
    height: ${({ $tablet }) =>
      $tablet?.height ? `${(0.7 * $tablet.height) / 16}rem` : 'auto'};
    background-image: url(${({ $tablet }) => $tablet?.src});
  }

@media (min-width: ${BREAKPOINTS.desktop}) {
    width: ${({ $desktop }) =>
      $desktop?.width ? `${(0.5 * $desktop.width) / 16}rem` : '100%'};
    height: ${({ $desktop }) =>
      $desktop?.height ? `${(0.5 * $desktop.height) / 16}rem` : 'auto'};
    background-image: url(${({ $desktop }) => $desktop?.src});
  }
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
