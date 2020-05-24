/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { itemJobs } from "../data";
import { jsx, css } from "@emotion/core";
import { useTheme, Text, Layer, List, ListItem, Button } from "sancho";

const Jobs = () => {
  const [dataJobs, setJobs] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    setJobs(itemJobs);
  }, []);
  return (
    <div
      css={{
        marginBottom: "0 !important",
        [theme.mediaQueries.md]: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "100%"
        }
      }}
    >
      {dataJobs.map((job, index) => (
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
              width: 46%;
            }
          `}
          key={index}
        >
          <Layer
            css={{
              overflow: "hidden",
              maxWidth: "100%",
              padding: "17px"
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
              {job.Api && <ListItem primary="API" secondary={job.Api} />}
              <ListItem primary="Versión" secondary={job.Version} />
              {job.Plug && <ListItem primary="Plugins" secondary={job.Plug} />}
              {job.Backend && (
                <ListItem primary="Backend" secondary={job.Backend} />
              )}
            </List>
            {
              job.link && (
                <Button css={css`
                  margin: 10px 0
                `}
                  intent="primary"
                  variant="outline"
                  onPress={() => window.open(`${job.link}`, '_blank')}>Ver Sitio
                </Button>
              )
            }

          </Layer>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
