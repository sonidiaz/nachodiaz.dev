/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { itemJobs } from "../data";
import { jsx, css } from "@emotion/core";
import { useTheme, Text, Layer, List, ListItem, Button } from "sancho";

const Jobs = () => {
  const urlPath = window.location.pathname
  const initialJobs = {jobs:[]};
  const [jobsShow, setJobShow] = useState(initialJobs);
  const theme = useTheme();
  let jobsToShow = [];

  useEffect(() => {
    
    const getRandomJobs = () => {
      const getValue = Math.floor(Math.random() * itemJobs.length);
      if (!jobsToShow.includes(getValue)) jobsToShow.push(getValue);
      if (jobsToShow.length <= 1) {
        getRandomJobs();
      } else {
        displayJobs(jobsToShow);
      }
    };
    if(urlPath === '/book') {
      jobsToShow = [];
      setJobShow({
        jobs: [...itemJobs],
      });
      //  window.scrollTo(0, 0);
      return;
    }
    getRandomJobs();
    return () => {
      console.log('Desmontamos')
    }
  }, []);
  
  const displayJobs = (arr) => {
    const newJobs = [];
    arr.forEach((i) => {
      newJobs.push(itemJobs[i]);
      setJobShow({
        jobs: [...newJobs],
      });
    });
  };
  return (
    <React.Fragment>
      <div
        css={{
          marginBottom: "0 !important",
          background: "#DAEEEF",
          [theme.mediaQueries.md]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "100%",
          },
        }}
      >
        {jobsShow.jobs.map((job, index) => (
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
        ))}
      </div>
    </React.Fragment>
  );
};

export default Jobs;
