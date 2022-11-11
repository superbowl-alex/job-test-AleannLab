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
  border-bottom-color: rgba(58, 69, 98, 0.13);
  margin-bottom: 24px;
  @media screen and (min-width: 1400px) {
    padding-bottom: 9px;
  }
`;

export const AddWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const AddSubTitle = styled.h3`
  color: ${p => p.theme.colors.noteDetilesMobile};
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const AddList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AddItemType = styled.li`
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.46px;
  font-weight: 700;
  padding: 17px 13px;
  color: ${p => p.theme.colors.linkAddPrimary};
  background-color: ${p => p.theme.colors.linkBacgroundAddPrimary};
  border: 1px solid rgba(85, 105, 158, 0.3);
  border-radius: ${p => p.theme.radii.large};
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
  @media screen and (min-width: 1400px) {
    padding: 0;
    width: 220px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AddItemBenefits = styled(AddItemType)`
  color: ${p => p.theme.colors.linkAddSecondary};
  background-color: ${p => p.theme.colors.linkBacgroundAddSecondary};
  border: 1px solid #ffcf00;
`;
