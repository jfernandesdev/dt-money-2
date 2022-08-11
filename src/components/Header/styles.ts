import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0rem 7.5rem;

  @media (max-width: 769px) {
    img {
      width: 117px;
    }
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  height: 50px;
  padding: 0 1.25rem;
  border: 0;
  border-radius: 6px;
  transition: background 0.2s;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }

  @media (max-width: 769px) {
    height: 38px;
    font-size: 0.875rem;
    padding: 0 1rem;
  }
`
