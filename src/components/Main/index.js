import React, { Component }   from 'react';
import { connect }            from "react-redux";

//components
import Education  from '../Education';
import Experience from '../Experience';
import Section from '../Section';

class Main extends Component {

  componentDidMount() {
    const { getInfoProfile } = this.props;
    getInfoProfile();
  }

  render() {
    const { education, experience } = this.props.profile;
    return (
      <Section>
        <Experience experience={ experience } />
        <Education education={ education } />
      </Section>
    )
  }
}

const mapState = state => ({
  profile: state.profile,
});

const mapDispatch = ({ profile: { getInfo  }}) => ({
  getInfoProfile: () => getInfo()
});

export default connect(mapState, mapDispatch)(Main);

