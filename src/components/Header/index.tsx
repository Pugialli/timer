import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logoPugialli from "/pugialli-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoPugialli} alt="" />
      <nav>
        <NavLink to="/timer" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
