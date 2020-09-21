/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Text, useTheme } from "sancho";
import imgAccesible0 from "../images/user-icon-1.png";
import imgAccesible1 from "../images/user-icon-2.png";
import imgAccesible2 from "../images/user-icon-3.png";
import imgAccesible3 from "../images/user-icon-4.png";

const images = {
  0: imgAccesible0,
  1: imgAccesible1,
  2: imgAccesible2,
  3: imgAccesible3,
};

const Hero = () => {
  const theme = useTheme();
  const Wrapper = styled.div(`
    position: relative;
    padding-top: 0;
    font-size: 4.5rem;
    max-width: 66rem;
    ${theme.mediaQueries.lg} {
      width: 70%;
      max-width: 740px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    },
  `);
  const Section = styled.section(`
    width: 80%;
    margin: 0 auto;
    ${theme.mediaQueries.lg}{
      width: 70%;
      max-width: 66rem;
      padding-top: 0;
      font-size: 4.5rem;
    }
    h1:after{
      content: '';
      width: "80px",
      height: "80px",
      top: "-38px",
      right: "-77px",
      backgroundSize: "cover",
      width: 20px;
      height: 20px;
      top: 0;
      right: 0;
      position: absolute;
    }
    img {
      display: none;
      ${theme.mediaQueries.lg}{
        display: block;
        width: 69%;
        max-width: 250px;
        margin: 0 auto;
        filter: grayscale(1);
      }
    }
  `);
  const getImageHero = () => {
    const imgRandom = Math.floor(Math.random() * 3);
    return images[imgRandom];
  };
  return (
    <div
      css={css`
        width: 100%;
        overflow: hidden;
        position: relative;
        background: #daeeef;
        padding-bottom: 5.5rem;
        padding-top: 2.5rem;
      `}
    >
      <Wrapper>
        <Section>
          <Text
            variant="display2"
            css={{
              position: "relative",
              paddingTop: "2.5rem",
              textAlign: "right",
              color: "black",
              fontSize: "4.5rem",
              maxWidth: "46rem",
              fontWeight: 200,
              [theme.mediaQueries.lg]: {
                paddingTop: "0",
                fontSize: "4.5rem",
                maxWidth: "66rem",
              },
            }}
          >
            NACHO DÍAZ
          </Text>
          <Text
            variant="h5"
            css={{
              textAlign: "right",
              fontWeight: "300",
            }}
          >
            Colaborador en <b>equipos de desarrollo tecnológico.</b> Creando
            proyectos digitales poniendo el foco siempre en el usuario.
          </Text>
        </Section>
        <Section
          css={{
            width: "49% !important",
          }}
        >
          <img src={getImageHero()} alt="" />
        </Section>
      </Wrapper>
    </div>
  );
};

export default Hero;
