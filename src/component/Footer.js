/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text, useTheme, Container, Link } from "sancho";

const Footer = () => {
  const theme = useTheme()
  return ( 
    <div
        css={{
          textAlign: "center",
          position: "relative",
          paddingBottom: theme.spaces.lg,
          paddingTop: "2rem",
          background: theme.colors.background.layer,
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
            <Link target="_blank" href="https://reactjs.org/">
              {" "}
              React
            </Link>{" "}
            y el frameworks
            <Link target="_blank" href="https://sancho-ui.com/">
              {" "}
              Sancho
            </Link>
            <br />
            <Link href="mailto:nachodiaz8@gmail.com">Mi Email</Link> preguntas o
            para lo que necesites
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
   );
}
 
export default Footer;