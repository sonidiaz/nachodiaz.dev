/** @jsx jsx */
import { jsx } from "@emotion/core";
import iconTw from "../images/icons/013-twitter-1.png";
import iconLinkedin from "../images/icons/010-linkedin.png";
import iconGit from "../images/icons/github.png";

const Footer = () => {
  return (
    <div
      css={{
        width: "100%",
        padding: "20px",
        marginLeft: "auto",
        background: "white",
        textAlign: "center",
        boxSizing: "border-box",
        boxShadow: "2px 2px 2px 1px #CAE9FF",
        "> div": {
          "> a": {
            display: "block",
            width: "100%",
            height: "100%",
          },
        },
      }}
    >
      <div
        css={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          a: {
            width: "30px",
            height: "30px",
            marginLeft: "5px",
            marginRight: "5px",
            display: "block",
            textIndent: "-10000px",
          },
        }}
      >
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sonidiaz/"
            css={{
              backgroundSize: "cover",
              backgroundImage: `url(${iconLinkedin})`,
            }}
          >
            Linkedin
          </a>
        </div>
        <div>
          <a
            href="https://github.com/sonidiaz"
            rel="noopener noreferrer"
            target="_blank"
            css={{
              backgroundSize: "cover",
              backgroundImage: `url(${iconGit})`,
            }}
          >
            Github
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/sonidiaz"
            rel="noopener noreferrer"
            target="_blank"
            css={{
              backgroundSize: "cover",
              backgroundImage: `url(${iconTw})`,
            }}
          >
            Twitter
          </a>
        </div>
      </div>

      <div
        css={{
          width: "100%",
          marginTop: "20px",
          "a": {
            textDecoration: "none",
            color: "grey",
            "&:hover":{
              textDecoration: "underline"
            }
          },
        }}
      >
        <a href="https://www.freepik.es/vectores/personas" rel="noopener noreferrer" target="_blank"
          >
          Vector de Personas creado por freepik - www.freepik.es
        </a>
      </div>
    </div>
  );
};

export default Footer;
