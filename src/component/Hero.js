/** @jsx jsx */
import {useState, useEffect} from 'react'
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Text, useTheme } from "sancho";
import Typist from 'react-typist';
import imgAccesible0 from "../images/user-icon-1.png";
import imgAccesible1 from "../images/user-icon-2.png";
// import imgAccesible2 from "../images/user-icon-3.png";
import imgAccesible2 from "../images/nature-icon-1.png";

const images = {
  0: imgAccesible0,
  1: imgAccesible1,
  2: imgAccesible2,

};


const Hero = () => {
  const [textHeroChange, setTextHero] = useState('para el emprendimiento social.');
  const theme = useTheme();
  const textos = ['equitativos y sostenibles.','para formentar el aprendizaje']
  const Wrapper = styled.div(`
    position: relative;
    padding-top: 0;
    font-size: 4.5rem;
    max-width: 66rem;
    ${theme.mediaQueries.md} {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    },
    ${theme.mediaQueries.lg} {
      width: 70%;
    },
  `);
  const Section = styled.section(`
    width: 80%;
    margin: 0 auto;
    ${theme.mediaQueries.md}{
      width: 50%;
      max-width: 66rem;
      padding-top: 0;
      font-size: 4.5rem;
    }
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
      ${theme.mediaQueries.md}{
        display: block;
        width: 100%;
        max-width: 250px;
        margin: 0 auto;
        filter: sepia(0.4);
      }
      ${theme.mediaQueries.lg}{
        display: block;
        width: 69%;
        max-width: 250px;
        margin: 0 auto;
        filter: sepia(0.4);
      }
    }
  `);

  const getImageHero = () => {
    const imgRandom = Math.floor(Math.random() * 3);
    return images[imgRandom];
  };
  useEffect(() => {
    let i = 1;
    const intervalHero = setInterval(() => {
      if(i > (textos.length - 1)) i = 0
      setTextHero(textos[i])
      i ++
    }, 6000)
    return () => {
      clearInterval(intervalHero);
    }
  }, [])
  return (
    <div
      css={css`
        width: 100%;
        overflow: hidden;
        position: relative;
        background: #495371;
        padding-bottom: 4.5rem;
        padding-top: 0.5rem;
      `}
    >
      <Wrapper>
        <Section>
          
          <Text
            variant="h5"
            css={{
              textAlign: "right",
              fontWeight: "300",
              color: "white"
            }}
          >
          Colaboro en diseño y desarrollo para <b> proyectos tecnológicos</b> 
            <b>
              <Typist>
              {textHeroChange}
              </Typist>
            </b>
          </Text>
        </Section>
        <Section
          css={{
            width: "49% !important",
            [theme.mediaQueries.md]:{
              height: "210px",
            }
          }}
        >
          <img src={getImageHero()} alt="" />
        </Section>
      </Wrapper>
    </div>
  );
};

export default Hero;
