import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


export const Box = styled.div`
  display: flex;
  height: 200px;
  width: 500px;
  margin: 25px;
  border: solid 1px #f1f1f1;
  box-shadow: 1px 3px 5px;
  border-radius: 10px;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px 0 0 10px;
    flex: 1;
    background-color: #1aebb7;
    svg {
      font-size: 1.5em;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 2;
  }
`;

export const Name = styled.div`
  font-size: 1.6em;
  color: #003825;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 1.2em;
  color: #003825;
`;

export const Email = styled.div`
  font-size: 1em;
  color: #003825;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: -15px;
`;
