import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WrapAdditional = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1400px) {
    flex-direction: column-reverse;
  }
`;

export const BackLink = styled(Link)`
  width: 213px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  background-color: ${p => p.theme.colors.backLink};
  border-radius: ${p => p.theme.radii.large};
  & > svg {
    color: black;
  }
  @media screen and (max-width: 1399px) {
    margin-top: 50px;
  }
`;

export const BackText = styled.p`
  color: ${p => p.theme.colors.textDark};
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  text-transform: uppercase;
`;
