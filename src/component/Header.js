/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { Navbar, Toolbar, IconLinkedin, IconGithub, IconTwitter} from 'sancho';
const Header = () => {
  return (
    <Navbar
      css={{
        position: "relative",
        boxShadow: "none",
        background: "#495371",
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
              <IconLinkedin color="white" />
              </a>
          </div>
          <div>
            <a
              href="https://github.com/sonidiaz"
              rel="noopener noreferrer"
              target="_blank"
            >
            <IconGithub color="white"/>
          </a>
          </div>
          <div>
            <a
              href="https://twitter.com/sonidiaz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconTwitter color="white"/>
          </a>
          </div>
        </div>
      </Toolbar>
    </Navbar>

  );
}

export default Header;