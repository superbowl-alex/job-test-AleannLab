import styled from '@emotion/styled';

export const WrapCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: center; */
  align-items: center;
  padding: 16px 16px 24px;
  color: ${p => p.theme.colors.textSecondary};
  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 24px;
  }
`;

export const WrapMainInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  height: 100%;
  gap: 19px;
`;

export const WrapAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 100%;
  margin-left: 85px;
  margin-bottom: 14px;
  @media screen and (min-width: 1400px) {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 32px;
    margin-bottom: 0;
  }
`;

export const WrapTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  @media screen and (min-width: 1400px) {
    justify-content: space-between;
    gap: 8px;
    width: 959px;
  }
`;

export const Image = styled.img`
  flex-shrink: 0;
  display: block;
  width: 66px;
  height: 66px;
  border-radius: ${p => p.theme.radii.round};
  @media screen and (min-width: 1400px) {
    width: 85px;
    height: 85px;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.textDark};
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  font-weight: 400;
  @media screen and (min-width: 1400px) {
    font-size: 20px;
    line-height: 1.25;
    letter-spacing: -0.63px;
    font-weight: 700;
  }
`;

export const DepName = styled.p`
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: 0.24px;
  @media screen and (min-width: 1400px) {
  }
`;

export const Address = styled.div`
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: 0.24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Note = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  @media screen and (min-width: 1400px) {
    margin-left: 32px;
  }

  & > svg {
    @media screen and (max-width: 1399px) {
      display: none;
    }
  }
`;

export const Post = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.22;
  letter-spacing: 0.21px;
  margin-left: auto;
  @media screen and (min-width: 1400px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: 0.24px;
  }
`;
