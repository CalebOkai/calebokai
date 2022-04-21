import styled from "styled-components";
import { colors, snippets } from "../../styles";


const Styles = styled.div`
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(3,18,37,1) 81%, rgba(4,24,48,1) 100%);
  color: ${colors.white};
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  ${snippets.flexCenter}
  justify-content: space-between;
  gap: 5rem;

  #Profile {
    .img-wrapper {
      position: relative;
      height: 10rem;
      width: 10rem;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      margin-bottom: 1rem;
      ${snippets.flexCenter}
      img {
        height: calc(100% - 5px);
        width: calc(100% - 5px);
        object-fit: cover;
        position: relative;
        z-index: 1;
        border-radius: 50%;
        transform: rotate(20deg);
      }
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        ${snippets.absoluteCenter};
        z-index: 1;
        background-color: #08AEEA;
        background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
      }
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .sub-text {
      color: ${colors.grey2};
      font-size: 1rem;
    }
  }

  #Code {
    font-size: 1rem;
    font-weight: bold;
    font-family: monospace, monospace;
    background: ${colors.black};
    padding: 2rem;
    width: 100%;
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    color: ${colors.terminal};
    max-width: 50rem;
    margin: 0 auto;
    .content {
      span {
        color: ${colors.white};
      }
    }
    .cursor {
      width: 15px;
      height: 5px;
      background-color: ${colors.terminal};
      animation: blink 500ms linear infinite;
    }
    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }

  #Contact {
    h2 {
      font-size: 2rem;
      display: inline-block;
      border-bottom: 1px solid ${colors.white};
      margin-bottom: 2rem;
    }
    ol {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      text-align: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      a {
        color: ${colors.white};
        display: block;
        text-decoration: underline;
        text-decoration-color: ${colors.grey1};
      }
    }
  }
 
`;

export default Styles;