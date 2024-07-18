import { StyledContentWr } from "@/styles/shared";
import React, { useState } from "react";
import styled from "styled-components";
import SvgSelector from "../shared/SvgSelector";
import { HEADER_LINKS } from "@/lib/constants";
import { BREAKPOINTS, COLORS } from "@/styles/variables";

const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  console.log(burgerIsOpen);

  return (
    <>
      <StyledHeader>
        <StyledHeaderContentWr>
          <StyledLogoLink href="#">
            <SvgSelector name="GooseLogo" />
          </StyledLogoLink>
          <StyledHeaderLinks burgerisopen={burgerIsOpen ? "true" : "false"}>
            {HEADER_LINKS.map((link, i) => {
              return (
                <StyledHeaderLink
                  key={`nav_link_${i}`}
                  href={link.address}
                >
                  {link.name}
                </StyledHeaderLink>
              );
            })}
          </StyledHeaderLinks>
        </StyledHeaderContentWr>
      </StyledHeader>

      <StyledMobileHeader>
        <StyledMobileHeaderContentWr burgerisopen={burgerIsOpen ? "true" : "false"}>
          <StyledLogoLink
            href="#"
            burgerisopen={burgerIsOpen ? "true" : "false"}
          >
            <SvgSelector name="GooseLogo" />
          </StyledLogoLink>
          <StyledBurgerBtn
            onClick={() => setBurgerIsOpen((state) => !state)}
            burgerisopen={burgerIsOpen ? "true" : "false"}
          >
            <SvgSelector name="Burger" />
          </StyledBurgerBtn>

          <StyledHeaderLinks burgerisopen={burgerIsOpen ? "true" : "false"}>
            {HEADER_LINKS.map((link, i) => {
              return (
                <StyledHeaderLink
                  key={`nav_mobile_link_${i}`}
                  href={link.address}
                  style={{
                    transition: "0.8s",
                    transform: `translateY(${burgerIsOpen ? 0 : -200}px)`,
                    borderBottom: `${burgerIsOpen ? "0.6vw solid #eae8e2" : "none"}`,
                    transitionDelay: `${(i + 1) * 40}ms`,
                  }}
                >
                  {link.name}
                </StyledHeaderLink>
              );
            })}
          </StyledHeaderLinks>
        </StyledMobileHeaderContentWr>
      </StyledMobileHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  @media ${BREAKPOINTS.laptop} {
    height: 4.29vw;
  }
  @media ${BREAKPOINTS.mobile} {
    display: none;
  }
`;

const StyledMobileHeader = styled.header`
  display: none;
  @media ${BREAKPOINTS.mobile} {
    display: block;

    min-height: 13.13vw;
  }
`;

const StyledHeaderContentWr = styled(StyledContentWr)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled.a<{ burgerisopen: string }>`
  width: 123px;
  height: 41px;
  svg {
    width: 100%;
    height: 100%;
  }
  @media ${BREAKPOINTS.laptop} {
    width: 8.79vw;
    height: 2.86vw;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media ${BREAKPOINTS.mobile} {
    position: absolute;
    top: 2.81vw;
    left: 6.25vw;
    width: 23.13vw;
    height: 7.5vw;
    z-index: 10;
    svg {
      transition: 2s;
      * {
        fill: ${(props) => (props.burgerisopen === "true" ? COLORS.black : "auto")};
      }
      width: 100%;
      height: 100%;
    }
  }
`;
const StyledMobileHeaderContentWr = styled(StyledContentWr)<{ burgerisopen: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const StyledHeaderLinks = styled.nav<{ burgerisopen: string }>`
  display: flex;
  gap: 61px;
  @media ${BREAKPOINTS.laptop} {
    gap: 4.36vw;
  }
  @media ${BREAKPOINTS.mobile} {
    position: absolute;
    top: 0;
    flex-direction: column;
    justify-content: end;
    gap: 0.6vw;
    width: 100%;
    transition: 0.5s;
    height: ${(props) => (props.burgerisopen === "true" ? "64.06vw" : "13.13vw")};
    background-color: ${(props) => (props.burgerisopen === "true" ? COLORS.white : "auto")};
    border-radius: 0 0 5vw 5vw;
    padding-bottom: 7.5vw;
  }
`;

const StyledHeaderLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  color: black;
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    height: 13.13vw;
    font-size: 5vw;
    justify-content: start;
    margin: 0 7.5vw;
  }
`;

const StyledBurgerBtn = styled.button.attrs({ type: "button" })<{ burgerisopen: string }>`
  position: absolute;
  z-index: 10;
  right: 6.25vw;
  top: 3.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.1vw;
  height: 5vw;
  svg {
    width: 100%;
    height: 100%;
    rect {
      fill: ${(props) => props.burgerisopen === "true" && COLORS.black};
    }
    #first {
      transform-origin: 50%;
      transform: rotate(${(props) => (props.burgerisopen === "true" ? "45deg" : "0deg")})
        translatey(${(props) => (props.burgerisopen === "true" ? "37%" : "0px")});
      transition: 0.5s;
    }

    #second {
      width: ${(props) => (props.burgerisopen === "true" ? "0" : "6vw")};
      transform: translateX(${(props) => (props.burgerisopen === "true" ? "3vw" : "0px")});
      transition: 0.5s;
    }

    #third {
      transform-origin: 50%;
      transform: rotate(${(props) => (props.burgerisopen === "true" ? "-45deg" : "0deg")})
        translatey(${(props) => (props.burgerisopen === "true" ? "-37%" : "0")});
      transition: 0.5s;
    }
  }
`;
