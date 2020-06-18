/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Text, Container, Avatar, Divider } from "sancho";
import nacho from "../images/nachodiaz.png";

const Profile = () => {
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
          display: flex;
          justify-content: space-between;
          width: 90%;
          margin: 60px auto 20px;
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
          <Text variant="paragraph">El desarrollo es interno y externo.</Text>
          <Text variant="paragraph">
            Soy Nacho, Frontend Developer, llevo más de 7 años con HTML, CSS y
            Javascript. He trabajado en agencias de publicidad, como
            desarrollador independiente y en consultoras tecnológicas, con la
            fortuna de hacerlo en diferentes ciudades en 2 países distintos.
          </Text>
          <Text variant="paragraph">
            Esto me ha llevado a tener que adaptar mi forma de vida a los
            cambios propios de vivir en un país distinto, lejos de mi circulo
            mas cercano y salir constantemente de mi zona de confort, lo que
            conlleva a muchas satisfacciones y momentos de introspección
            personal.
          </Text>
          <Text variant="paragraph">
            Este tipo de situación nos hace cuestionarnos si lo que hacemos vale
            la pena o no, si el tiempo y energías que invertimos tienen un
            propósito real y que valga la pena.
          </Text>
          <Text variant="paragraph">
            Esto esto que mi interés personal en el área de la tecnología, está
            fuertemente dirigido en hacer cada vez mas accesible la web a todos
            las personas. Independiente de su capacidad de percibir e
            interactuar con nuestras interfaces. En hacer que la brecha digital
            para con las personas con capacidades especiales sea cada vez menor.
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
