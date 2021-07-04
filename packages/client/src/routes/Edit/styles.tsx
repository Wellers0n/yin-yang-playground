import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Aside = styled.div`
  flex: 1;
  background-color: #1aebb7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  flex: 2;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100px;
  height: 120px;
`;

export const LogoTitle = styled.h1`
  color: black;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const LogoDescription = styled.h3`
  color: #003825;
  width: 300px;
  text-align: center;
`;

export const Title = styled.h2`
  color: black;
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #1aebb7;
  height: 50px;
  border: none;
  width: 100%;
  margin-top: 60px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
`