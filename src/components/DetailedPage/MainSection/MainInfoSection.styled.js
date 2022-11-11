import styled from '@emotion/styled';

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
  border-bottom-color: ${p => p.theme.colors.borderBottomTitle};
  margin-bottom: 24px;
  @media screen and (min-width: 1400px) {
    padding-bottom: 9px;
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
  top: 110%;
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
  color: ${p => p.theme.colors.noteDetilesMobile};
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
