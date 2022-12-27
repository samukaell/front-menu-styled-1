import { ContainerMenu } from "../../styles/styled-menu";

export default function Home() {
  return (
    <ContainerMenu>
      <ul>
        <li color="#00ade1">
          <a href="#" data-text="&nbsp;Inicio">
            &nbsp;Inicio&nbsp;
          </a>
        </li>
        <li color="#ff6493">
          <a href="#" data-text="&nbsp;Perfil">
            &nbsp;Perfil&nbsp;
          </a>
        </li>
        <li color="#ffdd1c">
          <a href="#" data-text="&nbsp;Servicos">
            &nbsp;Servicos&nbsp;
          </a>
        </li>
        <li color="#00dc82">
          <a href="#" data-text="&nbsp;Equipe">
            &nbsp;Equipe&nbsp;
          </a>
        </li>
        <li color="#dc00d4">
          <a href="#" data-text="&nbsp;Contato">
            &nbsp;Contato&nbsp;
          </a>
        </li>
      </ul>
    </ContainerMenu>
  );
}
