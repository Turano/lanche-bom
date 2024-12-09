import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  @media ${({ theme }) => theme.media.lteMedium} {
    margin: 0 20rem;
  }
  margin-bottom: 5rem;
`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
`;
