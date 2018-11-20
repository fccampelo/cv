import React from 'react';
import styled from 'styled-components';

//components
import Article from '../Article';

const Progress = styled.div`
  width: 100%;
  border: 1px solid #ffffff;
  height: 14px;
  margin: 10px 0;
`;

const ProgressStatus = styled.div`
  background-color: #ffffff;
  width: ${props => props.percent };
  height: 14px;
  
`;

const ProgressBar = ({ percent }) => (
  <Progress>
    <ProgressStatus percent={percent} />
  </Progress>
)


export default ProgressBar;