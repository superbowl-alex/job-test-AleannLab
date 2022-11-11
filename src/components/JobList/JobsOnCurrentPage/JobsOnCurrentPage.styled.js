import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  min-height: 206px;
  border-radius: 8px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  background-color: ${p => p.theme.colors.cardMobileBacground};
  box-shadow: ${p => p.theme.shadows.cardMobile};

  &:hover {
    transform: scale(1.01);
  }
  @media screen and (min-width: 1400px) {
    min-height: 0;
    height: 164px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.cardDesctop};
  }
`;
