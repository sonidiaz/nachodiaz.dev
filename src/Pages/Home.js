/** @jsx jsx */
import React from "react";
import heroImage from "../images/adventure-1807524_1920.jpg";
import Calugas from "../component/Calugas";
import Hero from "../component/Hero";
import { jsx, Global, css } from "@emotion/core";
import Jobs from "../component/Jobs";
import iconLinkedin from "../images/icons/010-linkedin.png";
import iconTw from "../images/icons/013-twitter-1.png";
import iconGit from "../images/icons/github.png";
import {
  Text,
  useTheme,
  Container,
  Link,
  Navbar,
  Toolbar,
} from "sancho";

const Home = () => {
  const theme = useTheme();

  return (
    <main>
      <Global
        styles={{
          html: {
            backgroundColor: theme.colors.background.tint1,
          },
        }}
      />
      <Navbar
        css={{
          position: "relative",
          boxShadow: "none",
          background: "transparent",
        }}
      >
        <Toolbar>
          <Text
            variant="h5"
            css={{
              alignItems: "center",
              display: "flex",
              color: "#000000",
            }}
            gutter={false}
          >
            <span> NachoDíaz</span>
          </Text>
          <div
            css={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-between",
              width: "105px",
              "> div": {
                position: "relative",
                width: "27px",
                height: "27px",
                borderRadius: "50%",
                "> a": {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  textIndent: "-10000px"
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
              >Linkedin</a>
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
              >Github</a>
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
              >Twitter</a>
            </div>
          </div>
        </Toolbar>
      </Navbar>
      <Hero />
      <div
        css={css`
          padding-bottom: ${theme.spaces.xl},
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          
        // ${theme.mediaQueries.md} {
        //   background: url(${heroImage});
        // }
        `}
      ></div>
      <Calugas />
      <div
        css={{
          background: theme.colors.background.tint1,
          paddingTop: theme.spaces.lg,
          paddingBottom: theme.spaces.lg,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container css={{}}>
          <div
            css={{
              display: "block",
              textAlign: "center",
              "& > div": {
                marginBottom: theme.spaces.xl,
                marginLeft: "auto",
                marginRight: "auto",
              },
              [theme.mediaQueries.lg]: {
                display: "flex",
                justifyContent: "space-between",
                "& > div": {
                  margin: theme.spaces.lg,
                },
              },
            }}
          >
            <Jobs />
          </div>
        </Container>
      </div>
      <div
        css={{
          textAlign: "center",
          position: "relative",
          paddingBottom: theme.spaces.lg,
          paddingTop: "4rem",
          background: theme.colors.background.tint2,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container>
          <Text
            css={{
              position: "relative",
              zIndex: 10,
              fontSize: theme.fontSizes[0],
            }}
          >
            Sitio desarrollado con
            <Link href="https://reactjs.org/">React</Link> y el frameworks{" "}
            <Link href="https://sancho-ui.com/">Sancho</Link>
            <br />
            <Link href="mailto:nachodiaz8@gmail.com">Email me</Link> with
            questions or whatevs!
            <br />
            <div>
              Icons made by
              <Link
                href="https://www.flaticon.com/authors/smashicons"
                title="Smashicons"
              >
                Smashicons
              </Link>
              from
              <Link href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </Link>
              is licensed by
              <Link
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
              >
                CC 3.0 BY
              </Link>
            </div>
          </Text>
        </Container>
      </div>
    </main>
  );
};

export default Home;
