import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  padding: 0;
  margin: 0;
  color: #333;

  &:hover {
    color: #555;
  }
`;

export const SearchIcon = styled(FaSearch)`
  width: 2rem;
  height: 2rem;
`;
