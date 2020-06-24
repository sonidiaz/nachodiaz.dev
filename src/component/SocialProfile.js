/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text, useTheme, Button, Link } from "sancho";
import linkedin from "../images/icons/icons8-linkedin-100.png";
import twitter from "../images/icons/icons8-twitter-100.png";
import github from "../images/icons/icons8-github-100.png";

export const SocialProfile = ({social, children, link}) => {
  const theme = useTheme();
  let currentLink = '';
  const getSocialIncon = () => {
    switch (social) {
      case 'linkedin':
        currentLink = link
        return linkedin
      case 'github':
        currentLink = link
        return github
      default:
        currentLink = link
        return twitter
    }
  }
  return (
    <div
      css={[
        {
          paddingBottom: '5em',
          paddingTop: '5em',
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          background: "white",
          [theme.mediaQueries.md]: {
            display: "flex",
            backgroundSize: "cover",
          },
        },
      ]}
    >
      <div
        css={{
          fontSize: theme.fontSizes[0],
          maxWidth: "30rem",
          position: "relative",
          padding: "8px 15px",
          marginLeft: theme.spaces.md,
          marginRight: theme.spaces.md,
          borderRadius: theme.radii.lg,
          display: "inline-block",
          [theme.mediaQueries.md]: {
            background: "white",
            padding: "12px 18px",
            marginLeft: "60px",
            marginTop: theme.spaces.md,
            marginBottom: theme.spaces.md,
          },
        }}
      >
        <Text
          css={{
            fontSize: theme.fontSizes[1],
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "center",
            [theme.mediaQueries.md]: {
            },
          }}
        >
          <img
            css={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              position: "absolute",
              flex: "0 0 60px",
              top: "-50px",
              [theme.mediaQueries.md]: {
                display: "block",
              },
            }}
            src={getSocialIncon()}
            alt=""
          />
          <p>{children}</p>

        </Text>
        <Button css={{
          padding: '0',
          alignItems: "flex-start",
          height: "auto",
          border:"0"
        }}
          intent="primary"
          variant="outline"
        >
          <Link css={{
            color: "#505152",
            textDecoration: "underline"
          }}
          href={currentLink}
          target="_blank"
          >Ver Perfil</Link>
        </Button>
      </div>
    </div>
  );
};
