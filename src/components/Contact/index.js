import React from 'react';

//components
import Section from '../Section';
import Article from '../Article';
import Title from '../Title';
import Paragraph from '../Paragraph';

const Contact = ({ contact }) => {
  return ( 
    <Section profile>
      <Title profile> Contact </Title>
      <Article>
        <Paragraph profile> { contact ? contact.cel : null } </Paragraph>
        <Paragraph profile> { contact ? contact.tel : null } </Paragraph>
      </Article>
      <Article>
        <Paragraph profile> { contact ? contact.address : null } </Paragraph>
      </Article>
      <Article>
        <Paragraph profile> { contact ? contact.website : null } </Paragraph>
        <Paragraph profile> { contact ? contact.mail : null } </Paragraph>
      </Article>
    </Section>
  )
}

export default Contact;