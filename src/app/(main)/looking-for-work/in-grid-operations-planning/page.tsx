import React from 'react';


import { Resume } from '../base';

const objective = `Advanced Energy Systems master's student seeking a position in grid operations planning, modeling, and analysis.
Professional experience in developing flexible enterprise software solutions and skilled in data analysis.
Eager to contribute to cutting-edge projects by leveraging technical skills and a passion for innovative energy solutions.`


const ResumeGridPlanning = () => <Resume
    objective={objective}
    relevantCoursework="Power Systems Analysis, Power Quality, Linear Optimization, Data Science, Computational Economics"
/>

export default ResumeGridPlanning