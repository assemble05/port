import styled from "styled-components";
interface themeProps {
  direction?: string;
}
const LiWrapper = styled.li<themeProps>`
  list-style-type: none;
  flex-direction: ${(props) =>
    props.direction === "invert" ? "row-reverse" : "row"};
  background-color: transparent;
  width: 95%;
  max-width: 950px;
  align-items: center;
  margin-top: 100px;
  height: 200px;
  justify-content: space-evenly;
  display: flex;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    width: 38vw;
    max-width: 198px;
    margin-bottom: 7px;
  }
  a {
    text-decoration: none;
  }
  button {
    position: absolute;
    width: 100px;
    height: 25px;
    font-size: 12px;
    border-radius: 8px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, #f5636b, #f74987);
  }
  button:hover {
    background-image: linear-gradient(90deg, #fe343f, #f91868);
  }
  .content {
    width: 38vw;
    max-width: 320px;
  }
  @media (min-width: 768px) {
    h2 {
      margin-bottom: 17px;
      font-size: 24px;
    }
    p {
      margin-bottom: 10px;
      font-size: 16px;
    }
    button {
      width: 120px;
      height: 32px;
      font-size: 14px;
    }
  }
`;
const DivContent = styled.div`
  width: 38vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  position: relative;
  img {
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31vw;
    height: 31vw;
    max-height: 145px;
    max-width: 145px;
    padding: 10px;
    border-radius: 50%;
  }

  img:hover {
    position: absolute;
    animation-name: slq;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 5s;
  }
  @keyframes slq {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export { LiWrapper, DivContent };
