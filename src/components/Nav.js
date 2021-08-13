import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>OnFire</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    background: transparent;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
    border-radius: 1rem 0 0 1rem;
    color: white;
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #bb86fc;
    color: white;
    border-radius: 0 1rem 1rem 0;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default Nav;
