/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Text, Container, Avatar, Divider, useTheme } from "sancho";
import nacho from "../images/nachodiaz.png";

const Profile = () => {
  const theme = useTheme();
  return (
    <Container
      css={{
        margin: "60px auto",
      }}
    >
      <Divider />
      <div
        css={css`
          position: relative;
          display: block;
          width: 90%;
          margin: 100px auto 70px;
          ${theme.mediaQueries.sm}{
            display: flex;
            justify-content: space-between;
          }
        `}
      >
        <Avatar
          css={{
            marginRight: "1rem",
          }}
          src={nacho}
          name="Nacho Díaz"
          size="xl"
        />

        <div
          css={{
            span: {
              textAlign: "left",
            },
          }}
        >
          <Text css={{
            marginBottom: '1em'
          }} variant="display3">El desarrollo es interno y externo</Text>
          <Text variant="paragraph">
            Soy parte de equipos que hacen productos digitales y mi principal función es desarrollar las interfaces de usuario, el rol del frontend developer.
          </Text>
          <Text variant="paragraph">
            Llevo varios años colaborando en proyectos, lo he hecho en agencias de publicidad, como
            desarrollador independiente y en consultoras tecnológicas, en diferentes ciudades de Chile y España lo que me ha permitido experimentar diferentes visiones que me han ayudado en mi desarrollo profesional y personal.
          </Text>
          <Text variant="paragraph">
            Vivir lejos de tu país te enseña que la adaptabilidad al cambio es algo fundamental para la supervivencia.
          </Text>
          <Text variant="paragraph">
          Salir de la zona de confort lleva a muchas satisfacciones y también a muchos cuestionamientos, te preguntas si lo que haces vale la pena o si el tiempo y energías que inviertes tiene un propósito real para tu vida.
          </Text>
          <Text variant="paragraph">
            A raíz de todo lo anterior, mi interés en el área de la tecnología está
            fuertemente dirigido en ayudar a hacer cada vez más accesible los sitios web, en hacer que la brecha digital
            para las personas con capacidades especiales sea cada vez menor.
          </Text>
        </div>
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
