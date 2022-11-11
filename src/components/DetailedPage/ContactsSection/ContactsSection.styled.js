import styled from '@emotion/styled';

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

export const TitleContacts = styled(Title)`
  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const ContactsWrap = styled.div`
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.large};
  overflow: hidden;
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 56px;
    right: 0px;
    width: 402px;
  }
`;

export const ContactsText = styled.div`
  overflow: hidden;
  position: relative;
  height: 210px;
  padding: 31px 60px;
  color: ${p => p.theme.colors.contactsPrimary};
  background-color: ${p => p.theme.colors.contactsBackground};
`;

export const Circle = styled.div`
  display: none;
  position: absolute;
  z-index: 0;
  height: 273px;
  width: 273px;
  background-color: ${p => p.theme.colors.circleBackground};
  left: -20%;
  top: -20%;
  border-radius: ${p => p.theme.radii.round};
  @media screen and (min-width: 1400px) {
    display: block;
  }
`;

export const ContactsMap = styled.div`
  height: 222px;
  width: 100%;
`;

export const ContactsName = styled.div`
  z-index: 1;
  position: relative;
  font-size: 16px;
  line-height: 1.22;
  letter-spacing: 0.24px;
  font-weight: 700;
  margin-bottom: 17px;
  @media screen and (min-width: 1400px) {
    font-size: 20px;
    line-height: 1.25;
    letter-spacing: -0.63px;
    margin-bottom: 8px;
  }
`;

export const ContactsAddress = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 1.442;
  letter-spacing: -0.5px;
  margin-bottom: 6px;
  @media screen and (min-width: 1400px) {
    font-family: Roboto, serif;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.56px;
    margin-bottom: 7px;
    color: ${p => p.theme.colors.contactsDesSecondary};
  }
  & > svg {
    opacity: 0.56;
  }
`;

export const ContactsConnect = styled.div`
  z-index: 1;
  position: relative;
  font-size: 16px;
  line-height: 1.442;
  letter-spacing: -0.5px;
  color: ${p => p.theme.colors.contactsSecondary};
  @media screen and (min-width: 1400px) {
    font-family: Roboto, serif;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.56px;
    color: ${p => p.theme.colors.contactsDesSecondary};
  }
`;
