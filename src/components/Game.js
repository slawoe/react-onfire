import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../assets/utils/utils";
import { popup } from "../assets/animations/animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          src={smallImage(image, 640)}
          alt={name}
          layoutId={`image ${stringPathId}`}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }

  p {
    padding-bottom: 0.5rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
