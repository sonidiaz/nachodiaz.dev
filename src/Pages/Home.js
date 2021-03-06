/** @jsx jsx */
import { useState, useEffect } from "react";
import { itemJobs } from "../data";
import Calugas from "../component/Calugas";
import Hero from "../component/Hero";
import { jsx, Global, css } from "@emotion/core";
import Jobs from "../component/Jobs";
import Profile from "../component/Profile";
import { SocialProfile } from "../component/SocialProfile";
import Footer from "../component/Footer";
import { Text, useTheme, Container, Button } from "sancho";

const Home = () => {
  const [jobsShow, setJobShow] = useState({ jobs: [] });
  const [isLoading, setLoading] = useState(false);
  const theme = useTheme();
  const page = "home";
  useEffect(() => {
    let showData = [];
    page === "home"
    ? (showData = [itemJobs[0], itemJobs[1]])
    : (showData = itemJobs);
    setJobShow({ jobs: showData });
  }, [page]);
  const handleShowJob = () => {
    setLoading({ isLoading: !isLoading });
    setJobShow({ jobs: [...itemJobs] });
  };
  const renderJobs = (page=0) => {
    const listaJobs = jobsShow.jobs.map((job, idx) => (
      <Jobs key={idx} job={job} />
    ))
    return listaJobs

  }
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
      <Calugas />
      <Profile />
      <div
        css={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          boxShadow: "3px 2px 2px 3px #daeeef",
        }

        }
      >
        <div
          css={{
            width: "100%",
            "> div": {
              width: "100%",
              textAlign: "center",
            },
            [theme.mediaQueries.sm]: {
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "100%",
              "> div": {
                width: "33.3%",
                borderLeft: "1px solid #daeeef"
              }
            },
          }}
        >
          <div className="container-social-profile">
            <SocialProfile social="linkedin" link="https://www.linkedin.com/in/sonidiaz/">
            Si quieres saber más sobre mi experiencia laboral y académica visita mi perfil en Linkedin. No dudes en escribirme si ves opciones de sinergia y colaboración.
            </SocialProfile>
          </div>
          <div className="container-social-profile">
            <SocialProfile social="github" link="https://github.com/sonidiaz">
            En Github encontrarás un repositorio con el código de alguno de mis trabajos. Además podrás ver mi lista de favoritos, donde están los proyectos y desarrolladores a los que sigo.
            </SocialProfile>
          </div>
          <div className="container-social-profile">
            <SocialProfile social="twitter" link="https://twitter.com/sonidiaz">
            En Twitter suelo compartir noticias sobre accesibilidad, tecnología para humanizar, eventos, meetups.
            </SocialProfile>
          </div>
        </div>
      </div>
      <div
        css={css`
          position: relative;
          text-align: center;
          background: #daeeef;
          padding: 74px 0 30px;
          h4 {
            color: #62b6cb;
            display: block;
            padding: 20px 0;
            background: white;
            // max-width: 350px;
            margin: 0 auto;
            box-shadow: 3px 2px 2px 3px #cae9ff;
            width: 80%;
            ${theme.mediaQueries.sm} {
              width: 40%;
            }
          }
        `}
      >
        <Text variant="h4">PROYECTOS</Text>
      </div>
      <div
        css={{
          background: "#DAEEEF",
          paddingTop: theme.spaces.lg,
          paddingBottom: theme.spaces.lg,
          width: "100%",
          overflow: "hidden",
        }}
        id="css-10caf3q-Home"
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
                flexWrap: "wrap",
                justifyContent: "space-between",
                "& > div": {
                  margin: theme.spaces.lg,
                },
              },
            }}
          >
            {
              (renderJobs())
            }
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
              marginBottom: "2rem",
            }}
          >
            {!isLoading ? (
              <Button
                intent="primary"
                variant="outline"
                onPress={handleShowJob}
                loading={isLoading}
              >
                OTROS PROYECTOS
              </Button>
            ) : (
                <Button
                  intent="primary"
                  variant="outline"
                  onPress={() => {
                    window.scroll({ top: 0, behavior: "smooth" });
                  }}
                >
                  ¡LLévame arriba!
                </Button>
              )}
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
