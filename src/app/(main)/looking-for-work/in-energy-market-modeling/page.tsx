import React from 'react';


import { Resume } from '../base';

const objective = `
Advanced Energy Systems master's student seeking a position in energy market modeling and analytics.
Professional experience in developing flexible enterprise software solutions and skilled in data analysis.
Eager to contribute to cutting-edge projects by leveraging technical skills and a passion for innovative energy solutions.`

const ResumeBase = () => <Resume
    objective={objective}
    relevantCoursework="Power System Operations and Management, Computational Economics, Power Quality, Data Science, Linear Optimization"
/>

export default ResumeBase