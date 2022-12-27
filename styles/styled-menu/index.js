import styled from 'styled-components';

const ContainerMenu = styled.main`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #252839;

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const LiStyled = styled.li`
  position: relative;
  list-style: none;

  a {
    position: relative;
    font-size: 3em;
    text-decoration: none;
    line-height: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  }

  a::before {
    content: attr(data-text);
    position: absolute;
    color: ${(props) => props.color};
    width: 0;
    overflow: hidden;
    transition: 1s;
    border-right: 8px solid ${(props) => props.color};
    -webkit-text-stroke: 1px ${(props) => props.color};
  }

  a:hover::before {
    width: 100%;
    filter: ${(props) => `drop-shadow(0 0 25px ${props.color})`};
  }
`;

export { ContainerMenu, LiStyled };
