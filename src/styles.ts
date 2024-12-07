import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  margin-top: 12rem;

  @media ${({ theme }) => theme.media.lteMedium} {
    margin: 0 5rem;
    margin-top: 15rem;
  }
`;

export const Headers = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3000;
`;

export const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 400px;
  button {
    width: 100%;
  }
`;
