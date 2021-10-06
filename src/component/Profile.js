/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Text, Container, Avatar, Divider, useTheme } from "sancho";
import nacho2 from "../images/nachodiazv2.png";

const Profile = () => {
  const theme = useTheme();
  return (
    <Container
      css={{
        margin: "60px auto",
      }}
    >
      <div
        css={css`
          position: relative;
          display: block;
          width: 100%;
          margin: 100px auto 0;
          ${theme.mediaQueries.sm}{
            display: flex;
            justify-content: space-between;
          }
        `}
      >
        

        <div
          css={{
            width: "100%",
            span: {
              textAlign: "left",
            },
            [theme.mediaQueries.sm]: {
              width: "30%",
              display: "flex",
              alignItems: "center"
            },
          }}
        >
          
          <Avatar
              css={{
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: "15px"
              }}
              src={nacho2}
              name="Nacho Díaz"
              size="xl"
            />
        </div>
        <Container css={{
          width: "100%",
          [theme.mediaQueries.sm]: {
            width: "70%"
          },
        }}>
          <Container css={{
            display: "flex",
            alignItems: "center",
            padding: "0 !important"
          }}>
            <Text variant="display2" css={{
              textAlign: 'left',
              fontSize: "4,5em",
              fontWeight: "200"
            }}>NACHO DÍAZ</Text>
           
          </Container>
          <Text variant="paragraph" css={{
            marginBottom: '1em',
            textAlign: 'left',
          }}>
            Ayudo a impulsar proyectos que tengan un beneficio en el <b> bien común </b>y el <b> medio ambiente</b>. El producto o servicio donde invirtamos nuestro tiempo y dinero debe ir en dirección de mejorar alguno de los <b>17 Objetivos de desarrollo sostenible</b>, así nos aseguramos de que nuestros esfuerzos contribuyen de alguna manera en hacer una sociedad más equitativa y sostenible.</Text>
        </Container>
      </div>
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          width: 70%;
          margin: 0 auto;
        `}
      ></div>
      {/* <Divider/> */}
    </Container>
  );
};

export default Profile;
