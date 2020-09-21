/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import iconTw from "../images/icons/013-twitter-1.png";
import iconLinkedin from "../images/icons/010-linkedin.png";
import iconGit from "../images/icons/github.png";
import { Navbar, Toolbar} from 'sancho';
const Header = () => {
  return (
    <Navbar
      css={{
        position: "relative",
        boxShadow: "none",
        background: "#DAEEEF",
      }}
    >
      <Toolbar
        css={css`
        padding-left: 0 !important;
        padding-right: 0 !important;
      `}
      >
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
      </Toolbar>
    </Navbar>

  );
}

export default Header;