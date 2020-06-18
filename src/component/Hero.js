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
        ${theme.mediaQueries.sm}{
          min-height: 364px;
        }
      `}
    >
      <Text
        css={{
          paddingTop: "6.5rem",
          paddingLeft: theme.spaces.md,
          paddingRight: theme.spaces.md,
          // marginBottom: "6.5rem",
          textAlign: "center",
          color: "black",
          [theme.mediaQueries.sm]: {
            fontSize: "2.5rem",
            maxWidth: "66rem",
          },
        }}
        variant="display2"
      >
        Todas las personas deben ser capaces de interactuar de forma natural con una plataforma tecnológica.
      </Text>
        <Text>
          La accesibilidad no puede ser una caracteristica, debe ser una obligación.
        </Text>
    </div>
  );
};

export default Hero;
