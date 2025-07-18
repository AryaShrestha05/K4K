import React from 'react';
import { Progress } from '../components/ui/progress';

const ProgressBar = ({ value }) => (
  <Progress value={value} className="h-2" />
);

export default ProgressBar; 