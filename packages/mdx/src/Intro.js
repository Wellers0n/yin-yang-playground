import React from "react";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";
import { Flex } from "rebass";

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const IconImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #c6d1dd;
`;

const Me = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

const MeName = styled.span`
  font-size: 50px;
  color: #c6d1dd;
  margin-left: 60px;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Root = styled.div([], {
  width: "50vw",
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: 'column'
});

const Username = styled.span`
  font-size: 14px;
  margin-left: 20px;
`;

const SocialMediaLink = ({ name, link, username }) => (
  <div>
    <Link href={link} target="_blank">
      <Row>
        <IconImage src={require(`./img/${name}`)} />
        <Username>{username}</Username>
      </Row>
    </Link>
  </div>
);

export const Intro = () => (
  <Root>
    <Row>
      <Me src={require("./img/me.jpg")} />
      <MeName>Wellerson</MeName>
    </Row>
    <SpaceBetween>
      <SocialMediaLink
        name={"github.png"}
        link={"https://github.com/wellers0n"}
        username={"@wellers0n"}
      />
      <SocialMediaLink
        name={"twitter.png"}
        link={"https://twitter.com/wellers0n_"}
        username={"@wellers0n_"}
      />
    </SpaceBetween>

    <Flex flex={1} alignItems="center" justifyContent="center" mt={30}>
      <MeName>Software Developer</MeName>
    </Flex>
  </Root>
);
