import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  margin: 1% 0;

  @media ${({ theme }) => theme.media.lteMedium} {
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 1rem;
    padding: 2%;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 5%;
  width: 30%;

  @media ${({ theme }) => theme.media.lteMedium} {
    margin: 1% 0;
  }
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

export const CardTitle = styled.div`
  width: 60%;
`;

export const CardPrice = styled.div`
  width: 40%;
`;

export const TestContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text};
  `;
