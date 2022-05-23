/** @jsx jsx */
import { jsx } from "@emotion/core";
import { IconLinkedin, IconGithub, IconTwitter} from 'sancho';

const Footer = () => {
  return (
    <div
      css={{
        marginLeft: "auto",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
        "> div": {
          position: "relative",
          width: "27px",
          height: "27px",
          borderRadius: "50%",
          "> a": {
            display: "block",
            width: "100%",
            height: "100%",
          },
        },
      }}
    >
      
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sonidiaz/"
        >
          <IconLinkedin color="black" />
          </a>
      </div>
      <div>
        <a
          href="https://github.com/sonidiaz"
          rel="noopener noreferrer"
          target="_blank"
        >
        <IconGithub color="black"/>
      </a>
      </div>
      <div>
        <a
          href="https://twitter.com/sonidiaz"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconTwitter color="black"/>
      </a>
      </div>
    </div>
    // <div
    //   css={{
    //     width: "100%",
    //     padding: "20px",
    //     marginLeft: "auto",
    //     background: "white",
    //     textAlign: "center",
    //     boxSizing: "border-box",
    //     boxShadow: "2px 2px 2px 1px #CAE9FF",
    //     "> div": {
    //       "> a": {
    //         display: "block",
    //       },
    //     },
    //   }}
    // >
    //   <div
    //     css={{
    //       position: "relative",
    //       display: "flex",
    //       justifyContent: "center",
    //       width: "100%",
    //       a: {
    //         width: "30px",
    //         height: "30px",
    //         marginLeft: "5px",
    //         marginRight: "5px",
    //         display: "block",
    //         textIndent: "-10000px",
    //       },
    //     }}
    //   >
    //     <div>
    //       <a
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         href="https://www.linkedin.com/in/sonidiaz/"
    //         css={{
    //           backgroundSize: "cover",
    //           backgroundImage: `url(${iconLinkedin})`,
    //         }}
    //       >
    //         Linkedin
    //       </a>
    //     </div>
    //     <div>
    //       <a
    //         href="https://github.com/sonidiaz"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         css={{
    //           backgroundSize: "cover",
    //           backgroundImage: `url(${iconGit})`,
    //         }}
    //       >
    //         Github
    //       </a>
    //     </div>
    //     <div>
    //       <a
    //         href="https://twitter.com/sonidiaz"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         css={{
    //           backgroundSize: "cover",
    //           backgroundImage: `url(${iconTw})`,
    //         }}
    //       >
    //         Twitter
    //       </a>
    //     </div>
    //   </div>

    //   <div
    //     css={{
    //       width: "100%",
    //       marginTop: "20px",
    //       display: "flex",
    //       justifyContent: "center",
    //       "a": {
    //         textDecoration: "none",
    //         color: "grey",
    //         width: "15%",
    //         maxWidth: "170px",
    //         height: "30px",
    //         "&:hover":{
    //           textDecoration: "underline"
    //         }
    //       },
    //     }}
    //   >
    //     <a href="https://www.freepik.es/vectores/personas" rel="noopener noreferrer" target="_blank"
    //       >
    //       Freepik - Personas
    //     </a>
    //     <a href="https://www.freepik.es/vectores/fondos" rel="noopener noreferrer" target="_blank"
    //       >
    //       Freepik - Fondos
    //     </a>
    //   </div>
    // </div>
  );
};

export default Footer;
