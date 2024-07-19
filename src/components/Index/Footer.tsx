import { StyledContentWr } from "@/styles/shared";
import { BREAKPOINTS, COLORS, CONTACTS_LINKS, NAV_LINKS } from "@/styles/variables";
import styled from "styled-components";
import SvgSelector from "../shared/SvgSelector";
import Image from "next/image";
import gooseLogo from "@/assets/gooseLogo.png";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterWr>
        <StyledFooterNavLinks>
          {NAV_LINKS.map((link, i) => {
            return (
              <StyledFooterNavLink
                key={`footer_link_${i}`}
                href={link.address}
              >
                {link.name}
              </StyledFooterNavLink>
            );
          })}
          <StyledFooterConfLink
            href="https://pushkeen.ru/privacy"
            target="_blank"
          >
            Политика конфиденциальности
          </StyledFooterConfLink>
        </StyledFooterNavLinks>
        <StyledFooterContactsLinks>
          <StyledFooterLogoLink
            href="https://goosegoose.ru/"
            target="_blank"
          >
            <Image
              src={gooseLogo}
              alt="Логотип Goose Goose"
            />
            {/* <SvgSelector name="GooseLogo" /> */}
          </StyledFooterLogoLink>

          {CONTACTS_LINKS.map((link, i) => {
            return (
              <StyledFooterContactsLink
                key={`footer_contact_link_${i}`}
                href={link.address}
                target="_blank"
              >
                {link.name}
              </StyledFooterContactsLink>
            );
          })}
        </StyledFooterContactsLinks>
        <StyledFooterInfo>
          <StyledFooterInfoLogoLink
            href="https://t.me/publicartspb"
            target="_blank"
          >
            <SvgSelector name="PublicArtLogo" />
          </StyledFooterInfoLogoLink>
          <StyledFooterP>
            Санкт-Петербург, Большая
            <br />
            Конюшенная ул., 27, Ресторан
            <br />
            Goose Goose
          </StyledFooterP>
        </StyledFooterInfo>
        <StyledFooterMobileInfo>
          <StyledFooterLogoLink
            href="https://goosegoose.ru/"
            target="_blank"
          >
            <Image
              src={gooseLogo}
              alt="Логотип Goose Goose"
            />
            {/* <SvgSelector name="GooseLogo" /> */}
          </StyledFooterLogoLink>
          <StyledFooterLogoLink
            href="https://t.me/publicartspb"
            target="_blank"
          >
            <SvgSelector name="PublicArtLogo" />
          </StyledFooterLogoLink>
          <StyledFooterMobileContactsLinks>
            {CONTACTS_LINKS.map((link, i) => {
              return (
                <StyledFooterContactsLink
                  key={`footer_contact_link_${i}`}
                  href={link.address}
                  target="_blank"
                >
                  {link.name}
                </StyledFooterContactsLink>
              );
            })}
          </StyledFooterMobileContactsLinks>
          <StyledFooterMobileP>
            Санкт-Петербург, Большая
            <br />
            Конюшенная ул., 27,
            <br />
            Ресторан Goose Goose
          </StyledFooterMobileP>
        </StyledFooterMobileInfo>
      </StyledFooterWr>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 30px 0 75px;
  display: flex;
  justify-content: center;
  @media ${BREAKPOINTS.laptop} {
    padding: 2.14vw 0 5.36vw;
  }
  @media ${BREAKPOINTS.mobile} {
    padding: 10.63vw 0 20.94vw;
  }
`;

const StyledFooterWr = styled(StyledContentWr)`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  @media ${BREAKPOINTS.laptop} {
    gap: 5vw;
  }
  @media ${BREAKPOINTS.mobile} {
    gap: 11.56vw;
  }
`;

const StyledFooterNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 22px;
  @media ${BREAKPOINTS.laptop} {
    gap: 1.57vw;
  }
  @media ${BREAKPOINTS.mobile} {
    gap: 2.5vw;
  }
`;

const StyledFooterNavLink = styled.a`
  font-family: Involve;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  white-space: nowrap;
  transition: 0.2s;
  &:hover {
    color: ${COLORS.littleText};
  }
  &:active {
    color: ${COLORS.textActive};
  }
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.71vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 5vw;
  }
`;

const StyledFooterConfLink = styled.a`
  cursor: pointer;
  font-family: Involve;
  font-size: 12px;
  font-weight: 400;
  line-height: 115%;
  opacity: 0.5;
  white-space: nowrap;
  transition: 0.2s;
  &:hover {
    color: ${COLORS.littleText};
  }
  &:active {
    color: ${COLORS.textActive};
  }
  @media ${BREAKPOINTS.laptop} {
    font-size: 0.86vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 2.5vw;
  }
`;

const StyledFooterContactsLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  gap: 15px;
  @media ${BREAKPOINTS.laptop} {
    gap: 1.07vw;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const StyledFooterContactsLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 115%;
  font-family: Involve;
  transition: 0.2s;
  &:hover {
    color: ${COLORS.littleText};
  }
  &:active {
    color: ${COLORS.textActive};
  }

  @media ${BREAKPOINTS.laptop} {
    font-size: 1.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 2.5vw;
  }
`;

const StyledFooterLogoLink = styled.a`
  margin-bottom: 16px;
  width: 148px;
  height: 48px;
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media ${BREAKPOINTS.laptop} {
    margin-bottom: 1.14vw;
    width: 10.57vw;
    height: 3.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    margin-bottom: 0;
    &:first-child {
      width: 21.88vw;
      height: 6.88vw;
    }
    &:nth-child(2) {
      width: 25vw;
      height: 3.13vw;
    }
  }
`;

const StyledFooterInfo = styled.div`
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const StyledFooterInfoLogoLink = styled.a`
  font-family: Involve;
  display: block;
  margin-bottom: 52px;
  width: 228px;
  height: 27px;
  svg {
    width: 100%;
    height: 100%;
  }
  @media ${BREAKPOINTS.laptop} {
    margin-bottom: 3.71vw;
    gap: 3.71vw;
    width: 16.29vw;
    height: 1.93vw;
  }
`;

const StyledFooterP = styled.p`
  font-family: Involve;
  text-align: end;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 3.75vw;
  }
`;

const StyledFooterMobileInfo = styled.div`
  display: none;
  @media ${BREAKPOINTS.mobile} {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 3.13vw;
  }
`;

const StyledFooterMobileContactsLinks = styled.div`
  display: none;
  @media ${BREAKPOINTS.mobile} {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 2.5vw;
  }
`;

const StyledFooterMobileP = styled.p`
  font-family: Involve;
  display: none;
  @media ${BREAKPOINTS.mobile} {
    white-space: nowrap;
    text-align: end;
    display: block;
    font-size: 2.5vw;
  }
`;
