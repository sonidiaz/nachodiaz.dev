/** @jsx jsx */
import { useEffect, useRef } from "react";
import { isMobile } from "../helpers/mobileDetect";
import { jsx, css } from "@emotion/core";
import { useTheme, Text, Layer, List, ListItem, Button, Avatar } from "sancho";
import reactIcon from "../images/icons/react.png";
import vueIcon from "../images/icons/vue.png";
import wordpressIcon from "../images/icons/wordpress.png";
import jsIcon from "../images/icons/javascript.png";

const Jobs = ({ job }) => {
  const theme = useTheme();
  const divRef = useRef(null);
  let id = job.imagen.replace(/[ .jpg | .png]/gi, "");

  useEffect(() => {
    divRef.current.id === "site-huawei" &&
      document
        .getElementById(divRef.current.id)
        .scrollIntoView({ behavior: "smooth" });
  }, []);

  const getIconFron = (front) => {
    switch (front) {
      case "React":
        return reactIcon;
      case "Vue":
        return vueIcon;
      case "Wordpress":
        return wordpressIcon;
      default:
        return jsIcon;
    }
  };
  const renderButton = (job) => {
    if (job.imagen === "screen-fgc.png" && isMobile.any()) {
      return "";
    } else {
      return (
        <Button
          css={{
            margin: "15px 0",
            background: "#465f71",
            borderColor: "#465f71",
          }}
          intent="primary"
          onPress={() => window.open(`${job.link}`, "_blank")}
        >
          Ver Proyecto
        </Button>
      );
    }
  };
  return (
    <div
      css={{
        marginBottom: "0 !important",
        background: "#465f71",
        width: "90%",
        [theme.mediaQueries.sm]: {
          width: "44%",
        },
      }}
      id={id}
      ref={divRef}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          text-align: left;
          margin-bottom: 15px;
          h5 {
            margin-top: 15px;
          }
          ${theme.mediaQueries.md} {
            width: 100%;
          }
        `}
        // key={index}
      >
        <Layer
          css={{
            overflow: "hidden",
            maxWidth: "100%",
            padding: "17px",
          }}
        >
          <div
            css={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <img
              alt=""
              css={css`
                width: 100%;
              `}
              src={require(`../images/jobs/${job.imagen}`)}
            />
          </div>
          <Text variant="h5">
            {job.name}{" "}
          </Text>
          <Text variant="subtitle">{job.texto}</Text>
          <List
            css={css`
              .ListItem {
                padding: 0.5rem;
                display: inline-block;
              }
            `}
          >
            {job.Api && (
              <ListItem
                aria-live="polite"
                aria-busy="true"
                interactive={false}
                primary="API"
                secondary={job.Api}
              />
            )}
            {job.Plug && (
              <ListItem
                aria-live="polite"
                aria-busy="true"
                interactive={false}
                primary="Plugins"
                secondary={job.Plug}
              />
            )}
            {job.Backend && (
              <ListItem
                aria-live="polite"
                aria-busy="true"
                interactive={false}
                primary="Backend"
                secondary={job.Backend}
              />
            )}
            {
              <ListItem
                aria-live="polite"
                aria-busy="true"
                interactive={false}
                contentAfter={
                  <Avatar
                    css={{
                      backgroundColor: "#ffffff",
                    }}
                    src={getIconFron(job.front)}
                  />
                }
              />
            }
          </List>
          {job.link && renderButton(job)}
        </Layer>
      </div>
    </div>
  );
};

export default Jobs;
