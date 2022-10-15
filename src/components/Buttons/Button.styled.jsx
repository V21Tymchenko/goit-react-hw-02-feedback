import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid #10625a;

  color: #077268;
  margin: 0 1em;
  padding: 12px 20px;
  box-shadow: 4px 3px 6px #077268;

  font-family: Verdana;
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0px 0px 0px #077268;
  }
`;
