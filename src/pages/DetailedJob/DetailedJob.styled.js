import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Bookmark } from '../../images/bookmark.svg';

export const Main = styled.main`
  padding: 24px 15px 37px;
  @media screen and (min-width: 1400px) {
    position: relative;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`;

export const Section = styled.section`
  margin-bottom: 60px;
  @media screen and (min-width: 1400px) {
    width: 793px;
    margin-bottom: 86px;
  }
`;

export const HeaderWrap = styled.div`
  position: relative;
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

export const TitleContacts = styled(Title)`
  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const NoteList = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  color: ${p => p.theme.colors.noteDetilesMobile};
  font-size: 16px;
  line-height: 1.44;
  letter-spacing: -0.5px;
  margin-bottom: 32px;
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 7px;
    right: 0;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.56px;
    margin-bottom: 0;
  }
`;

export const WrapItem = styled.li`
  display: flex;
  align-items: center;
  gap: 11px;
  &:first-of-type > svg {
    fill-opacity: 0;
    stroke: ${p => p.theme.colors.noteDetilesMobile};
    stroke-width: 2px;
  }
`;

export const IconStar = styled(Star)`
  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

export const IconBookmark = styled(Bookmark)`
  @media screen and (max-width: 1399px) {
    display: none;
  }
`;

export const ButtonApplyTop = styled.button`
  width: 127px;
  height: 52px;
  display: block;
  margin: 0 auto;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.starsMobile};
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: ${p => p.theme.radii.large};
  border: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
  display: none;
  @media screen and (min-width: 1400px) {
    margin-left: 0;
    margin-top: 39px;
    margin-bottom: 32px;
    display: block;
  }
`;

export const WrapSubTitle = styled.div`
  position: relative;
`;

export const SubTitle = styled.h3`
  width: 363px;
  margin-bottom: 21px;
  color: ${p => p.theme.colors.textDark};
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.75px;
  font-weight: 700;
  @media screen and (min-width: 1400px) {
    width: 501px;
    margin-bottom: 7px;
  }
`;

export const WrapSalary = styled.div`
  position: absolute;
  top: 125px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  @media screen and (min-width: 1400px) {
    top: 0px;
    flex-direction: column-reverse;
  }
`;
export const TextSalary = styled.p`
  color: ${p => p.theme.colors.noteDetilesMobile};
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
`;
export const ValueSalary = styled.p`
  color: ${p => p.theme.colors.textDark};
  font-size: 20px;
  line-height: 1.25;
  letter-spacing: -0.63px;
  font-weight: 700;
`;

export const Post = styled.p`
  color: rgba(56, 65, 93, 0.6);
  font-size: 13px;
  line-height: 1.92;
  letter-spacing: 0.19px;
  font-weight: 300;
  margin-bottom: 26px;
  @media screen and (min-width: 1400px) {
    opacity: 0.36;
    font-family: Roboto, serif;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.56px;
    font-weight: 400;
    margin-bottom: 7px;
  }
`;

export const Description = styled.p`
  color: ${p => p.theme.colors.noteDetilesMobile};
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
  @media screen and (min-width: 1400px) {
    font-family: Roboto, serif;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.56px;
    font-weight: 400;
  }
`;

export const ButtonApplyBottom = styled.button`
  width: 127px;
  height: 52px;
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.starsMobile};
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: ${p => p.theme.radii.large};
  border: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
  @media screen and (min-width: 1400px) {
    margin-left: 0;
  }
`;

export const WrapAdditional = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1400px) {
    flex-direction: column-reverse;
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
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const ContactsWrap = styled.div`
  margin: 0 auto;
  color: ${p => p.theme.colors.contactsPrimary};
  background-color: ${p => p.theme.colors.contactsBackground};
  border-radius: ${p => p.theme.radii.large};
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 56px;
    right: 0px;
    width: 402px;
  }
`;

export const ContactsText = styled.div`
  height: 200px;
  padding: 31px 60px;
`;
export const ContactsMap = styled.div`
  height: 232px;
`;

export const ContactsName = styled.div`
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

export const BackLink = styled(Link)`
  width: 213px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;
  background-color: rgba(56, 69, 100, 0.14);
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
