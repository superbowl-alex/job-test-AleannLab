import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 60px;
  @media screen and (min-width: 1400px) {
    width: 793px;
    margin-bottom: 86px;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.textDark};
  font-size: 28px;
  line-height: 1.22;
  letter-spacing: 0.41px;
  font-weight: 700;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${p => p.theme.colors.borderBottomTitle};
  margin-bottom: 24px;
  @media screen and (min-width: 1400px) {
    padding-bottom: 9px;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ImageItem = styled.li`
  width: 209px;
  height: 115px;
  border-radius: ${p => p.theme.radii.large};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
