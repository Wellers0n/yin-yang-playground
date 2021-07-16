import React from "react";
import styled from "styled-components";
import { space, width } from "styled-system";

const Img = styled.img`
  ${width}
`;

const Root = styled.div([], {
  width: "50vw",
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: 'column'
});

export const Center = styled.div`
  display: flex;
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
