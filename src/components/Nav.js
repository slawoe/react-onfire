import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fadeIn } from "../assets/animations/animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(searchValue));
    setSearchValue("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>OnFire</h1>
      </Logo>
      <form className="search">
        <input value={searchValue} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem 0;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 3rem 0 0;
  }
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    background: transparent;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
    border: 1px solid #bb86fc;
    border-radius: 1rem 0 0 1rem;
    color: white;
    font-size: 1rem;
    @media only screen and (max-width: 768px) {
      width: 50%;
      font-size: 0.75rem;
    }
  }
  button {
    font-size: 1rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem 2rem;
    background: #bb86fc;
    color: white;
    border: 1px solid #bb86fc;
    border-radius: 0 1rem 1rem 0;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
    @media only screen and (max-width: 768px) {
      padding: 0.5rem;
      font-size: 0.75rem;
    }
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
