import { BREAKPOINTS } from "@/styles/variables";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface AboutBlockCardProps extends PropsWithChildren {
  flexDirection: "column" | "row" | "row-reverse" | "column-reverse";
}

const AboutBlockCard = ({ flexDirection, children }: AboutBlockCardProps) => {
  return <StyledAboutCard style={{ flexDirection: flexDirection }}>{children}</StyledAboutCard>;
};

export default AboutBlockCard;

const StyledAboutCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${BREAKPOINTS.mobile} {
    flex-wrap: wrap;
    justify-content: start;
  }
`;
