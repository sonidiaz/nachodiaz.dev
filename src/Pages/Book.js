/** @jsx jsx */
import React from 'react'
import Jobs from '../component/Jobs';
import { jsx} from "@emotion/core";
import { Container, useTheme} from "sancho";

const Book = () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      {/* <div
        css={css`
          position: relative;
          text-align: center;
          background: #daeeef;
          padding: 84px 30px 60px;
          h4 {
            color: #62b6cb;
            display: block;
            padding: 20px 0;
            background: white;
            width: 70%;
            margin: 0 auto;
            box-shadow: 3px 2px 2px 3px #cae9ff;
          }
        `}
      >
        <Text variant="h4">
          Aqui quiero ponder y hacer un nexo con los trabajos que he desarrollado. Pero la mayoria son de agencia, los que tengo del ultimo tiempo estan aqui en <Link href="#">Gitgub</Link>. Pero es solo codigo. Estoy pasandolos a algo mas visual pero me va a demorar un rato. Entonces no se como linkear los de gestion de proyectos y mi background laboral
        </Text>
      </div> */}
      <Container css={{
        background: "#DAEEEF",
        width: "100%",
        maxWidth: "100%"
      }}>
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
              maxWidth: "1200px",
              margin: "0 auto",
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
    </React.Fragment>
  );
}

export default Book;