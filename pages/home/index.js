
import { ContainerMenu, LiStyled } from "../../styles/styled-menu";

export default function Home() {
  return (
    <ContainerMenu>
      <ul>
        <LiStyled color="#00ade1">
          <a href="#" data-text="&nbsp;Inicio">
            &nbsp;Inicio&nbsp;
          </a>
        </LiStyled>
        <LiStyled color="#ff6493">
          <a href="#" data-text="&nbsp;Perfil">
            &nbsp;Perfil&nbsp;
          </a>
        </LiStyled>
        <LiStyled color="#ffdd1c">
          <a href="#" data-text="&nbsp;Servicos">
            &nbsp;Servicos&nbsp;
          </a>
        </LiStyled>
        <LiStyled color="#00dc82">
          <a href="#" data-text="&nbsp;Equipe">
            &nbsp;Equipe&nbsp;
          </a>
        </LiStyled>
        <LiStyled color="#dc00d4">
          <a href="#" data-text="&nbsp;Contato">
            &nbsp;Contato&nbsp;
          </a>
        </LiStyled>
      </ul>
    </ContainerMenu>
  );
}