import styled from 'styled-components'

export const Header = styled.header<{ mobileMenu: boolean }>`
  background-color: ${({ theme }) => theme.headerBackground};
  backdrop-filter: blur(10px);
  color: red;
  position: fixed;
  top: 0;
  padding: 1rem 0;
  width: 100vw;
  box-shadow: ${({ theme }) => theme.headerBoxShadow};
  z-index: 5;
  @media (max-width: 980px) {
    height: 100vh;
    top: ${({ mobileMenu }) => (mobileMenu ? '-102vh' : 0)};
  }
`
export const HeaderContentContainer = styled.div`
  max-width: 1100px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 20px;
  }
`

export const Nav = styled.nav`
  & u {
    display: flex;
    gap: 1.5rem;
  }

  & u li {
    display: flex;
    gap: 1rem;
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

  @media (max-width: 980px) {
    & u {
      flex-direction: column;
      align-items: center;
    }
    & u li {
      flex-direction: column;
      align-items: center;
    }
    & u li a {
      color: ${({ theme }) => theme.textColor.secondaryColor};
      font-size: 1.5rem;
      font-family: 'Saira', sans-serif;
    }
  }
`
