/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Text, useTheme } from "sancho";

const Hero = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        background: #DAEEEF;
        padding-bottom: 2.5rem;
        ${theme.mediaQueries.lg}{
          min-height: 364px;
        }
      `}
    >
      <Text
        css={{
          paddingTop: "2.5rem",
          paddingLeft: theme.spaces.md,
          paddingRight: theme.spaces.md,
          textAlign: "center",
          color: "black",
          fontSize: "1.5rem",
          maxWidth: "46rem",
          [theme.mediaQueries.lg]: {
            paddingTop: "6.5rem",
            fontSize: "2.5rem",
            maxWidth: "66rem",
          },
        }}

      >
        Todas las personas deben ser capaces de interactuar de forma natural con una plataforma tecnológica.
      </Text>
        <Text css={{
          textAlign:"center",
          width: "80%",
          maxWidth: "800px",
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          La accesibilidad no puede ser una característica, debe ser una obligación.
        </Text>
    </div>
  );
};

export default Hero;
