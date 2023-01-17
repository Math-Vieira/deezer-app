import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBackground};
  backdrop-filter: blur(3px);
  color: red;
  position: fixed;
  top: 0;
  padding: 1rem 0;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.headerBoxShadow};
`
export const HeaderContentContainer = styled.div`
  min-width: 90%;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  & u {
    display: flex;
    gap: 1.5rem;
  }

  & u li a {
    color: ${({ theme }) => theme.textColor.secondaryColor};
    font-size: 1.1rem;
    font-family: 'Saira', sans-serif;
  }

  & u li a:hover {
    color: ${({ theme }) => theme.textColor.primaryColor};
  }

  & u li .active {
    color: ${({ theme }) => theme.textColor.primaryColor};
  }
`
