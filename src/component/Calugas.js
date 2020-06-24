/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Text, useTheme, Container, Link } from "sancho";

const Calugas = () => {
  const theme = useTheme();

  return (
    <div
      css={{
        background: theme.colors.background.layer,
        paddingTop: theme.spaces.lg,

        width: "100%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <Container css={{}}>
        <div
          css={{
            display: "block",
            textAlign: "center",
            "& > div": {
              marginBottom: theme.spaces.xl,
              maxWidth: "20rem",
              marginLeft: "auto",
              marginRight: "auto",
            },
            [theme.mediaQueries.sm]: {
              display: "flex",
              justifyContent: "space-between",
              "& > div": {
                margin: theme.spaces.lg,
                maxWidth: "20rem",
              },
            },
          }}
        >
          <div>
            <svg
              css={{ marginBottom: theme.spaces.md }}
              height="34"
              viewBox="0 0 312 312"
              width="34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="XMLID_107_"
                d="M22.347,0c-2.75,0-4.799,2.241-4.555,4.98l23.184,260.047c0.244,2.739,2.611,5.582,5.262,6.318
		l98.381,27.316c2.65,0.736,6.986,0.736,9.637,0.002l98.68-27.361c2.65-0.735,5.02-3.578,5.264-6.316L281.422,4.98
		c0.246-2.739-1.805-4.98-4.555-4.98H22.347z M232.049,59.641c-0.219,2.443-0.598,6.684-0.842,9.423l-0.611,6.823
		c-0.246,2.738-0.596,6.654-0.781,8.701c-0.184,2.048-0.359,3.723-0.391,3.723c-0.031,0-2.307,0-5.057,0h-69.76
		c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0h-36.74c-2.75,0-4.799,2.241-4.555,4.98l2.143,23.955c0.244,2.738,2.695,4.98,5.445,4.98
		H144.5c2.75,0,5.025,0,5.055,0s2.303,0,5.053,0h57.939c2.75,0,7.006,0,9.457,0c2.449,0,4.273,1.999,4.051,4.442
		c-0.223,2.443-0.604,6.685-0.848,9.423l-6.891,77.228c-0.246,2.739-0.557,6.238-0.691,7.776c-0.137,1.537-2.416,3.396-5.066,4.131
		l-58.133,16.119c-2.65,0.734-4.852,1.342-4.893,1.351c-0.041,0.009-2.242-0.586-4.893-1.321l-58.195-16.148
		c-2.65-0.735-5.018-3.578-5.262-6.317l-3.746-42.045c-0.244-2.739,1.807-4.98,4.557-4.98h5.311c2.75,0,7.25,0,10,0h7.92
		c2.75,0,5.199,2.241,5.445,4.98l1.469,16.459c0.244,2.739,2.615,5.566,5.271,6.283l27.221,7.351
		c2.654,0.717,4.836,1.304,4.848,1.304s2.193-0.588,4.848-1.305l27.27-7.369c2.654-0.717,5.027-3.545,5.273-6.283l2.957-32.976
		c0.246-2.739-1.803-4.98-4.553-4.98h-30.666c-2.75,0-5.023,0-5.053,0s-2.305,0-5.055,0H80.511c-2.75,0-5.199-2.242-5.443-4.98
		l-7.256-81.306c-0.244-2.739-0.623-6.979-0.842-9.423c-0.217-2.443,1.854-4.442,4.604-4.442H144.5c2.75,0,5.025,0,5.055,0
		s2.303,0,5.053,0h72.838C230.195,55.198,232.267,57.197,232.049,59.641z"
              />
            </svg>
            <Text variant="h4">Frontend</Text>
            <Text>
              Desarrollo de interfaces de usuario <br/> React | Vue | Node
            </Text>
          </div>
          <div
            css={{
              
              [theme.mediaQueries.md]: {
                marginBottom: theme.mediaQueries.xl,
              },
            }}
          >
            <svg
              css={{ marginBottom: theme.spaces.md }}
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
            <Text variant="h4">Accesibilidad</Text>
            <Text>
              Con <Link href="https://www.w3.org/TR/wai-aria/" target="_blank">ARIA</Link> es posible hacer más accesibles los productos desarrollados
            </Text>
          </div>
          <div>
            <svg
              css={{ marginBottom: theme.spaces.md }}
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
            >
              <path d="M20 3c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 .312.061.606.149.889l-4.21 3.157c.473.471.878 1.01 1.201 1.599l4.197-3.148c.477.316 1.048.503 1.663.503 1.656 0 3-1.343 3-3zm-2 0c0 .551-.448 1-1 1s-1-.449-1-1 .448-1 1-1 1 .449 1 1zm3 12.062c1.656 0 3-1.343 3-3s-1.344-3-3-3c-1.281 0-2.367.807-2.797 1.938h-6.283c.047.328.08.66.08 1s-.033.672-.08 1h6.244c.396 1.195 1.509 2.062 2.836 2.062zm-1-3c0-.551.448-1 1-1s1 .449 1 1-.448 1-1 1-1-.448-1-1zm-20-.062c0 2.761 2.238 5 5 5s5-2.239 5-5-2.238-5-5-5-5 2.239-5 5zm2 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm7.939 4.955l4.21 3.157c-.088.282-.149.576-.149.888 0 1.657 1.344 3 3 3s3-1.343 3-3-1.344-3-3-3c-.615 0-1.186.187-1.662.504l-4.197-3.148c-.324.589-.729 1.127-1.202 1.599zm6.061 4.045c0-.551.448-1 1-1s1 .449 1 1-.448 1-1 1-1-.449-1-1z" />
            </svg>
            <Text variant="h4">Gestión de proyectos</Text>
            <Text>De manera ágil con una red de colaboradores remotos</Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Calugas;
