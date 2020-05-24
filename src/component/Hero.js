/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { Text, Button, useTheme, IconArrowRight } from "sancho";
import Typist from "react-typist";

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
        background: #e8ebee;
        ${theme.mediaQueries.sm}{
          min-height: 304px;
        }
      `}
    >
      <Text
        css={{
          paddingTop: "6.5rem",
          paddingLeft: theme.spaces.md,
          paddingRight: theme.spaces.md,
          marginBottom: "6.5rem",
          textAlign: "center",
          color: "black",
          [theme.mediaQueries.sm]: {
            fontSize: "2.5rem",
            maxWidth: "46rem",
          },
        }}
        variant="display2"
      >
        <Typist
          css={css`
            .Cursor {
              display: inline-block;

              &--blinking {
                opacity: 1;
                animation: blink 1s linear infinite;
                @keyframes blink {
                  0% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              }
            }
          `}
        >
          Es necesario crear interfaces funcionales y accesibles para todas las personas
        </Typist>
      </Text>
    </div>
  );
};

export default Hero;
