import React, { Component }   from 'react';
import { connect }            from "react-redux";

//components
import Section from '../../components/Section';
import Education  from '../../components/Education';
import Experience from '../../components/Experience';

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

