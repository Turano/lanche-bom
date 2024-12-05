import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 90px;
  cursor: pointer;
  position: relative;
  margin: 10px 5px;
  padding: 5px;

  @media ${({ theme }) => theme.media.lteMedium} {
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    height: 200px;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 20px;
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
  position: relative;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.lteMedium} {
    flex-direction: column;
  }
`;

export const TestContainer = styled.div`
  border: 1px solid black;
  `;
