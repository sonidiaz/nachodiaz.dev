/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text, useTheme, Container, Link, Divider } from "sancho";

const Calugas = () => {
  const theme = useTheme();

  return (
    <div
      css={{
        background: "#74959A",
        width: "100%",
        overflow: "hidden",
        margin: "0 auto",
        padding: "60px 0"
      }}
    >
    <Container css={{
      }}>
        <div
          css={{
            display: "block",
            textAlign: "center",
            padding: "1.5rem 0",
            "& > div": {
              maxWidth: "30rem",
              marginLeft: "auto",
              marginRight: "auto",
            },
            [theme.mediaQueries.md]: {
              display: "block",
            }
          }}
        >
          <div>
            <Text css={{color: "white"}} variant="h4">Web / UI / Code & NoCode </Text>
            <Text css={{color: "white"}}>
              Desarrollo de sitios y plataformas web frontend y backend personalizados, CMS Wordpress. Integración y automatización de servicios y tareas con y sin código (NoCode).<br/>
            </Text>
          </div>
          {/* <div>
            <Text css={{color: "white"}} variant="h4">Gestión de proyectos</Text>
            <Text css={{color: "white"}}>De forma ágil con la metodología OKR y una red de colaboradores <b> hacemos </b>productos y servicios tecnológicos.</Text>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Calugas;
