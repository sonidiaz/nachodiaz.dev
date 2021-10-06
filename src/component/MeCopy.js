import React from 'react';
import { Text } from 'sancho';

const MeCopy = () => {
  return (
    <Text variant="paragraph" css={{
      marginBottom: '1em',
      marginTop: '3em',
      textAlign: 'center',
      width: "70%",
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
    He participado en proyectos en publicidad, como independiente y en consultoría en <b>Chile y España</b>. 
    </Text>
  );
};

export default MeCopy;