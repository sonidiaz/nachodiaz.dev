/** @jsx jsx */
import heroImage from "../images/adventure-1807524_1920.jpg";
import Calugas from "../component/Calugas";
import Hero from "../component/Hero";
import { jsx, Global, css } from "@emotion/core";
import Header from '../component/Header';
import Jobs from "../component/Jobs";
import Profile from '../component/Profile';
import Footer from "../component/Footer";
import { Text, useTheme, Container, Button } from "sancho";
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();

  return (
    <main>
      <Global
        styles={{
          html: {
            backgroundColor: theme.colors.background.layer,
          },
        }}
      />
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
      <Profile/>
      <div
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          background: #62b6cb;
          margin: 50px auto 0;
          box-shadow: 3px 2px 2px 3px #cae9ff;
        `}
      >
        <Text
          css={{
            paddingTop: "3.5rem",
            paddingLeft: theme.spaces.md,
            paddingRight: theme.spaces.md,
            // marginBottom: "6.5rem",
            textAlign: "center",
            color: theme.colors.background.layer,
            [theme.mediaQueries.sm]: {
              fontSize: "2.5rem",
              maxWidth: "46rem",
            },
          }}
          variant="display2"
        >
          Gestión de proyectos digitales
        </Text>
        <Text
          css={{
            paddingLeft: theme.spaces.md,
            paddingRight: theme.spaces.md,
            textAlign: "center",
            color: theme.colors.background.layer,
            marginBottom: "3.5rem",
            [theme.mediaQueries.sm]: {
              fontSize: "1.3rem",
              maxWidth: "36rem",
            },
          }}
        >
          Con metodologias agiles y la colaboración de equipos de
          desarrolladores deslocalizados.
        </Text>
      </div>
      <div
        css={css`
          position: relative;
          text-align: center;
          background: #daeeef;
          padding: 84px 0 60px;
          h4 {
            color: #62b6cb;
            display: block;
            padding: 20px 0;
            background: white;
            width: 70%;
            // max-width: 350px;
            margin: 0 auto;
            box-shadow: 3px 2px 2px 3px #cae9ff;
          }
        `}
      >
        <Text variant="h4">
          Aqui quiero ponder y hacer un nexo con los trabajos que he desarrollado. Pero la mayoria son de agencia, los que tengo del ultimo tiempo estan aqui en <a href="https://github.com/sonidiaz" target="_blank" rel="noopener noreferrer">Github.com</a>. Pero es solo codigo. Estoy pasandolos a algo mas visual pero me va a demorar un rato. Entonces no se como linkear los de gestion de proyectos y mi background laboral
        </Text>
        {/* <Text variant="h4">
          Algunos de los proyectos en los que he participado. En esta recopilación de trabajos no se encusntran los realizados los ultimos años, ya que muchos aun se encustran en fase de desarrollo y me es imposible mostrarlos. Si puedes visiart mi Github donde hay mucho codigo y proyectos, prototipos, pruebas etc que he realizado con los distinotos frameworks
        </Text> */}
      </div>
      <div
        css={{
          background: "#DAEEEF",
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
      <div css={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem"
      }}>
        <Button
          css={{
            margin: "15px 0",
            background: "#5FA8D3",
            borderColor: "#5FA8D3",
            "a":{
              color: "white",
              textDecoration: "none"
            }
          }}
          intent="primary"
        >
          <Link to='/book'>
            Ver otros los proyectos
          </Link>

         
        </Button>
      </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
