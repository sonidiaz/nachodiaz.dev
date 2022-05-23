/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Text, Container, Avatar, Divider, useTheme } from 'sancho';
import nacho2 from '../images/nachodiazv2.png';

const Profile = () => {
  const theme = useTheme();
  return (
    <Container
      css={{
        margin: '60px auto',
      }}
    >
      <div
        css={css`
          position: relative;
          display: block;
          width: 70%;
          margin: 100px auto 0;
          ${theme.mediaQueries.sm} {
            display: flex;
            justify-content: space-between;
          }
        `}
      >
        <div
          css={{
            width: '100%',
            span: {
              textAlign: 'left',
            },
            [theme.mediaQueries.sm]: {
              width: '30%',
              display: 'block',
              alignItems: 'center',
            },
          }}
        >
          <Container
            css={{
              display: 'block',
              alignItems: 'center',
              padding: '0 !important',
            }}
          >
            <Avatar
              css={{
                marginRight: 'auto',
                marginLeft: 'auto',
                marginBottom: '15px',
              }}
              src={nacho2}
              name='Nacho Díaz'
              size='xl'
            />

            <Text
              variant='h4'
              css={{
                textAlign: 'center',
                fontSize: '2,5em',
                fontWeight: '200',
              }}
            >
              NACHO DÍAZ
            </Text>
          </Container>
        </div>
        <Container
          css={{
            width: '100%',
            [theme.mediaQueries.sm]: {
              width: '70%',
            },
          }}
        >
          {/* <Text
            variant='paragraph'
            css={{
              marginBottom: '1em',
              textAlign: 'left',
            }}
          >
            Ayudo a impulsar proyectos que tengan un beneficio en el{' '}
            <b> bien común de todos quienes habitan este planeta.</b>
          </Text> */}
          <Text
            variant='paragraph'
            css={{
              marginBottom: '1em',
              textAlign: 'left',
            }}
          >
           En Chile empecé desarrollando campañas digitales en agencias de publicidad, después en Barcelona y Madrid he trabajado en consultoría y como desarrollador independiente.
          </Text>
          <Text
            variant='paragraph'
            css={{
              marginBottom: '1em',
              textAlign: 'left',
            }}
          >
            Hoy, post pandemia y las ventajas del trabajo en remoto, compagino la vida de pueblo cómo es sembrar mi propia comida o cortar los troncos para la chimenea con el desarrollo de productos digitales. 
            
          </Text>
          <Text
            variant='paragraph'
            css={{
              marginBottom: '1em',
              textAlign: 'left',
            }}
          >
           Hoy, me motiva entregar mi talento, esfuerzo y conocimientos a la vida, forma y necesidades del mundo rural y natural para así incentivar su cuidado y promover su vivencia.
            
          </Text>
        </Container>
      </div>
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          width: 70%;
          margin: 0 auto;
        `}
      ></div>
      {/* <Divider/> */}
    </Container>
  );
};

export default Profile;
