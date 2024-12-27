import styled from "styled-components";
import Image from "next/image";

export const OrderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.08rem solid var(--color-rose-20);
  padding-bottom: 1rem;
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-extra-small);
  gap: 0.3rem;
`;

export const OrderName = styled.h1`
  font-size: var(--font-size-extra-small);
  font-weight: var(--font-weight-semibold);
  color: var(--color-rose-900);
`;

export const OrderInfo = styled.div`
  display: flex;
  color: var(--color-rose-500);
  gap: 0.7rem;
`;

export const OrderInfoCount = styled.p`
  color: var(--color-red);
  font-weight: var(--font-weight-bold);
`;

export const OrderInfoPrice = styled.p`
  font-weight: var(--font-weight-regular);
`;

export const OrderInfoTotalPrice = styled.p`
  font-weight: var(--font-weight-semibold);
`;

export const OrderCancelIconWrapper = styled(Image)`
  cursor: pointer;
  border: 0.1rem solid var(--color-rose-700);
  border-radius: var(--border-radius-circle);
  padding: 0.1rem;

  &:hover {
    border-color: var(--color-rose-900);
  }
`;
