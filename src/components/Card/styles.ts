import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 80px;
  cursor: pointer;
  position: relative;
  margin: 10px 5px;
  padding: 5px;
`;

export const ImageContainer = styled.div`
  margin-right: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  justify-content: space-around;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.dark};
`;

export const TestContainer = styled.div`
  border: 1px solid black;
  `;
