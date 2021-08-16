import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../assets/utils/utils";
import apple from "../assets/img/apple.svg";
import gamepad from "../assets/img/gamepad.svg";
import nintendo from "../assets/img/nintendo.svg";
import steam from "../assets/img/steam.svg";
import xbox from "../assets/img/xbox.svg";
import playstation from "../assets/img/playstation.svg";
import ps5 from "../assets/img/PS5.svg";
import xboxsx from "../assets/img/xboxsx.svg";
import starEmpty from "../assets/img/star-empty.png";
import starFull from "../assets/img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("close")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      i <= rating
        ? stars.push(<img alt="start" key={i} src={starFull} />)
        : stars.push(<img alt="start" key={i} src={starEmpty} />);
    }
    return stars;
  };
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return ps5;
      case "Xbox Series S/X":
        return xboxsx;
      case "Xbox S":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="close" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <div className="close">
              <CloseButton className="close" onClick={exitDetailHandler}>
                X
              </CloseButton>
            </div>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                <p>{getStars()}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt="background"
                layoutId={`image ${pathId}`}
              />
            </Media>
            <Description>
              <h4>Description</h4>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map((screenshot) => (
                <img
                  src={smallImage(screenshot.image, 1280)}
                  key={screenshot.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #03dac6;
  }
  &::-webkit-scrollbar-track {
    background: #bb86fc;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #121212;
  position: absolute;
  left: 10%;
  color: white;
  @media only screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
  img {
    width: 100%;
  }
  .close {
    display: flex;
    justify-content: flex-end;
  }
`;

const CloseButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  background: #bb86fc;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding: 0.25rem 0.5rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  .rating > p > img {
    margin-top: 0.25rem;
    width: 1rem;
    height: 1rem;
    display: inline;
  }
  p {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  column-gap: 2rem;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  img {
    margin-top: 1rem;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
  }
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
  @media only screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export default GameDetail;
