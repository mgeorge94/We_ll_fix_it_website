import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
 width: 100%;
 color: white;
 background: black;
 position: relative;

 margin-bottom: 0;

 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 1rem 5rem;

 ul {
  display: flex;
  list-style: none;
  li {
   padding: 1rem;
   text-decoration: none;
  }
 }
 p {
  padding-top: 1rem;
 }
 .copiright {
  color: #949494;
 }
`;
export const LinkR = styled(Link)`
 color: white;
 transition: all 0.2s ease-in-out;

 text-decoration: none;
 cursor: pointer;
 :hover {
  color: var(--light-accent-color);
 }
`;
