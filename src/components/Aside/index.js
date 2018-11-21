import React, { Component } from 'react';
import { connect  } from 'react-redux';
import styled from 'styled-components';

//constantes
import { fontFamily } from '../../config/constantes';

//components
import Div           from '../Div';
import Skills        from '../Skills';
import Contact       from '../Contact';
import Profile       from '../Profile';
import HeaderProfile from '../HeaderProfile';


class Aside extends Component {

  componentDidMount() {
    const { getInfoProfile } = this.props;
    getInfoProfile();
  }
 
  render() {
    const { description, contact, name, profession, skills } = this.props.profile;
    return (
      <Div>
        <HeaderProfile  name={ name } profession={ profession } />
        <Profile description={ description } />
        <Contact contact={ contact } />
        <Skills skills={ skills } />
      </Div>
    )
  }
}

const mapState = state => ({
  profile: state.profile,
});

const mapDispatch = ({ profile: { getInfo  }}) => ({
  getInfoProfile: () => getInfo()
});

export default connect(mapState, mapDispatch)(Aside);
