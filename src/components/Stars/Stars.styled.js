import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 1px;
  color: ${p => p.theme.colors.starsMobile};
  @media screen and (min-width: 1400px) {
    color: ${p => p.theme.colors.starsDesctop};
  }
`;
export const Item = styled.li`
  width: 10px;
  height: 10px;
  & > svg {
    opacity: 0.66;
  }
  @media screen and (min-width: 1400px) {
    width: 19px;
    height: 18px;
    & > svg {
      width: 19px;
      height: 18px;
      opacity: 1;
    }
  }
`;
