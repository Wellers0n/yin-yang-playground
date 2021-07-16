import React from "react";
import styled from "styled-components";
import { space, width } from "styled-system";

import { Root } from "./Intro";

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #fdaa4c;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #57ad50;
  ${space}
`;

const ImgCenter = styled.div`
  display: flex;
`;

export const Cover = () => (
  <Root>
    <Center>
      <ImgCenter>
        <Img src={require("./img/graphql.png")} width={300} height={300} />
      </ImgCenter>
      <Title mt={20}>GraphQL resolve ?</Title>
    </Center>
  </Root>
);
