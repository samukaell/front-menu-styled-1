import styled from "styled-components";

const ContainerMenu = styled.main`
  font-family: "Poppins", sans-serif;
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

  ul li {
    position: relative;
    list-style: none;
  }

  ul li a {
    position: relative;
    font-size: 3em;
    text-decoration: none;
    line-height: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  }

  ul li a::before {
    content: attr(data-text);
    position: absolute;
    color: var(${(props)=>props.color});
    width: 0;
    overflow: hidden;
    transition: 1s;
    border-right: 8px solid var(${(props)=>props.color});
    -webkit-text-stroke: 1px var(${(props)=>props.color});
  }

  ul li a:hover::before {
    width: 100%;
    filter: drop-shadow(0 0 25px var(${(props)=>props.color}));
  }
`;

const LiStyled = styled.ul`
    color:${(props)=>props.color}
`;

export { ContainerMenu,LiStyled };
