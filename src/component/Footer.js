/** @jsx jsx */
import { jsx } from "@emotion/core";
import iconTw from "../images/icons/013-twitter-1.png";
import iconLinkedin from "../images/icons/010-linkedin.png";
import iconGit from "../images/icons/github.png";

const Footer = () => {
  return ( 
    <div
          css={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "space-between",
            width: "105px",
            padding: "20px",
            background: "white",
            boxShadow: "2px 2px 2px 1px #CAE9FF",
            "> div": {
              position: "relative",
              width: "27px",
              height: "27px",
              borderRadius: "50%",
              "> a": {
                display: "block",
                width: "100%",
                height: "100%",
                textIndent: "-10000px",
              },
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
    // <div
    //     css={{
    //       textAlign: "center",
    //       position: "relative",
    //       paddingBottom: theme.spaces.lg,
    //       paddingTop: "2rem",
    //       background: theme.colors.background.layer,
    //       width: "100%",
    //       overflow: "hidden",
    //     }}
    //   >
    //     <Container>
    //       <Text
    //         css={{
    //           position: "relative",
    //           zIndex: 10,
    //           fontSize: theme.fontSizes[0],
    //         }}
    //       >
    //         Sitio desarrollado con
    //         <Link target="_blank" href="https://reactjs.org/">
    //           {" "}
    //           React
    //         </Link>{" "}
    //         y el frameworks
    //         <Link target="_blank" href="https://sancho-ui.com/">
    //           {" "}
    //           Sancho
    //         </Link>
    //         <br />
    //         <Link href="mailto:nachodiaz8@gmail.com">Mi Email</Link> preguntas o
    //         para lo que necesites
    //         <br />
    //         <div>
    //           Icons made by
    //           <Link
    //             href="https://www.flaticon.com/authors/smashicons"
    //             title="Smashicons"
    //           >
    //             Smashicons
    //           </Link>
    //           from
    //           <Link href="https://www.flaticon.com/" title="Flaticon">
    //             www.flaticon.com
    //           </Link>
    //           is licensed by
    //           <Link
    //             href="http://creativecommons.org/licenses/by/3.0/"
    //             title="Creative Commons BY 3.0"
    //             target="_blank"
    //           >
    //             CC 3.0 BY
    //           </Link>
    //         </div>
    //       </Text>
    //     </Container>
    //   </div>
   );
}
 
export default Footer;