import React from 'react';
import styled from 'styled-components'
import { width } from 'styled-system';

const StyledImg = styled.img`
  ${width}
`;

const Root = styled.div([], {
 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: 'column'
});

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = ({ src, ...props}) => (
  <Root>
    <Center>
      <StyledImg src={src} {...props} />
    </Center>
  </Root>
);
