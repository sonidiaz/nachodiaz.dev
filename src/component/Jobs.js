/** @jsx jsx */
import {useEffect, useRef} from 'react';
import { jsx, css } from "@emotion/core";
import { useTheme, Text, Layer, List, ListItem, Button } from "sancho";

const Jobs = ({ job }) => {
  const theme = useTheme();
  const divRef = useRef(null);
  let id = job.imagen.replace(/[ .jpg | .png]/gi, '');

  useEffect(() => {
    (divRef.current.id === 'site-huawei') && document.getElementById(divRef.current.id).scrollIntoView({behavior: "smooth"});
  }, [])
  return (
    <div
      css={{
        marginBottom: "0 !important",
        background: "#DAEEEF",
        width: "90%",
        [theme.mediaQueries.sm]: {
          width: "44%",
        }
      }}
    id={id}
    ref={divRef} >
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
            css={css`
              width: 100%;
              height: auto;
              overflow: hidden;
            `}
          >
            <img
              alt=""
              css={css`
                width: 100%;
              `}
              src={require(`../images/jobs/${job.imagen}`)}
            />
          </div>
          <Text variant="h5">{job.name}</Text>
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
            <ListItem
              aria-live="polite"
              aria-busy="true"
              interactive={false}
              primary="Versión"
              secondary={job.Version}
            />
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
          </List>
          {job.link && (
            <Button
              css={{
                margin: "15px 0",
                background: "#5FA8D3",
                borderColor: "#5FA8D3",
              }}
              intent="primary"
              onPress={() => window.open(`${job.link}`, "_blank")}
            >
              Ver Proyecto
            </Button>
          )}
        </Layer>
      </div>
    </div>
  );
};

export default Jobs;
