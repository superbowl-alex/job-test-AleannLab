import styled from '@emotion/styled';

export const Main = styled.main`
  padding: 24px 15px 37px;
  @media screen and (min-width: 1400px) {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`;

export const Section = styled.section`
  margin-bottom: 60px;
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
    padding-bottom: 12px;
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
`;

export const WrapItem = styled.li`
  display: flex;
  align-items: center;
  gap: 11px;
  &:first-child > svg {
    fill-opacity: 0;
    stroke: ${p => p.theme.colors.noteDetilesMobile};
    stroke-width: 2px;
  }
`;

export const ButtonApplyTop = styled.button`
  display: none;
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
`;

export const WrapSalary = styled.div`
  position: absolute;
  top: 125px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
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
`;

export const Description = styled.p`
  color: ${p => p.theme.colors.noteDetilesMobile};
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.56px;
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
`;
