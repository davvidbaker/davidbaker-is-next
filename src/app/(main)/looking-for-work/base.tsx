'use client'
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'


const Div = styled.div`
    h1, h2, h3 {
        font-weight: bold;
    }

  main {
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  .left {
    max-width: 50rem;
    margin-right: 30px;
    width: 60%;
  }

  .right {
    max-width: 40rem;
    width: 35%;
    padding-left: 10px;
    border-left: 1px solid #f5f5f5;
  }

  .name {
    font-size: 4rem;
    margin: 0 auto;
    text-align: center;
  }

  .subtitle {
    position: absolute;
    top: 0;
    right: 40px;
    text-align: right;
    font-size: small;
    color: #888;
  }

  h2 {
    margin: 1.2rem 0 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  h3 {
    margin-bottom: 0.75rem;
  }

  h3 span {
    font-size: 0.9rem;
    margin-left: 5px;
    color: #888;
    font-weight: normal;
  }

  ul {
    list-style: disc;
    padding-left: 2rem;
  }

  p {
    color: #444;
    line-height: 1.5rem;
  }

  li p {
    margin: 0.25rem 0;
  }

  .annotations {
    margin-top: 3rem;
  }

  .annotations ul {
    list-style: none;
    padding-left: 0;
  }

  .annotations p {
    font-size: small;
    color: #aaa;
    line-height: 1rem;
    margin-bottom: 0.75rem;
  }

  .print-hide {
    // display: unset;
  }

  .print-show {
    display: none;
  }

  #printer-icon {
    content: '';
    top: 30px;
    right: 20px;
    position: absolute;
    width: 40px;
    height: 16px;
    border-radius: 5px 5px 0 0;
    background: #bbb;
    background-image: radial-gradient(circle at 90% 25%, white 3%, #bbb 3.1%);
    perspective: 60px;
    cursor: pointer;
  }

  #printer-icon::before {
    content: '';
    position: absolute;
    width: 75%;
    height: 80%;
    border: 2px solid #999;
    border-bottom-width: 0;
    background: white;
    top: calc(-80%);
    left: 10%;
    transition: 0.3s;
    transform-origin: center bottom;
  }

  #printer-icon::after {
    content: 'PRINT ALL THE THINGS';
    color: white;
    font-size: 4px;
    box-sizing: border-box;
    text-align: center;
    position: absolute;
    width: 90%;
    height: 100%;
    bottom: -20%;
    left: 3%;
    border: 2px solid #999;
    background: white;
    border-top: 0;
    z-index: 10;
    transform: rotateX(70deg);
    transition: transform 0.3s, color 0.1s;
  }

  #printer-icon:hover::after {
    transform: translatez(10px) rotatex(60deg) scalex(0.9);
    color: black;
  }

  #printer-icon:hover::before {
    transform: scaley(0.5);
  }

  @media (max-width: 800px) {
    main {
      flex-direction: column;
    }

    .left {
      width: unset;
      margin-right: unset;
    }

    .right {
      max-width: unset;
      width: unset;
      padding-left: unset;
      border-left: unset;
    }

    #skills {
      display: block;
    }

    #skills div {
      max-width: unset;
    }
  }

  @media (max-width: 400px) {
    #printer-icon {
      display: none;
    }
  }

  @media print {

    
    h3 {
        margin-bottom: 0.1rem;
        margin-top: 0.1rem;
    }
    ul {
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
    }

    .name {
      text-align: left !important;
      margin: 0;
      left: 40px !important;
    }

    .print-hide,
    .print-hide::before,
    .print-hide::after {
      display: none !important;
    }

    .print-show {
      display: block !important;
    }

    #skills p {
      font-size: 10px !important;
    }

    #skills ul {
      list-style: none;
      padding-left: 0;
    }

    #skills div {
      min-width: 20% !important;
      max-width: 30% !important;
    }

    .left {
        width: unset;
    }
    main {
      overflow: visible;
    }
  }
`;
interface Props {
    objective?: string
    relevantCoursework?: string
}

const baseObjective = "Experienced software engineer seeking position in energy system modeling, planning, and analysis."


const baseCoursework = "Power Systems Analysis, Power Quality, Energy for Transportation, Data Science, Computational Economics"
export const Resume = ({ objective = baseObjective, relevantCoursework = baseCoursework }: Props) => (
    <Div>
        <Head>
            <title>David Baker - Résumé</title>
        </Head>

        <div
            style={{
                margin: '0 auto',
                padding: '0 20px',
            }}
        >
            <header>
                <h1 className="name">David Baker</h1>
                <p className="subtitle print-show">
                    davidbaker.is/online<br />david_baker@mines.edu
                </p>
                <button
                    className="print-hide"
                    id="printer-icon"
                    onClick={() => window.print()}
                />
            </header>
            <main>
                <div className="left">
                    <section>
                        <h2>Objective</h2>
                        <p>{objective}</p>
                    </section>

                    <section>
                        <h2>Education</h2>
                        <h3><a href="https://www.mines.edu/">Colorado School of Mines</a>
                            <span>[2023 - graduating December 2024]</span><span>— <a title="transcript" href="/images/mines-unofficial-transcript.png">GPA: 4.00/4.00
                            </a></span></h3>
                        <ul>
                            <li><p>Master of Science in Advanced Energy Systems</p></li>
                            <li><p>Relevant coursework includes {relevantCoursework}</p></li>
                        </ul>
                        <h3>
                            <a href="https://www.upenn.edu">University of Pennsylvania</a>
                            <span>[2011 - 2015]</span><span>— <a title="transcript" href="/images/unofficial-transcript.png">GPA: 3.78/4.00
                                    </a>
                                </span>
                        </h3>
                        <ul>
                            <li>
                                <p>
                                    Bachelor of Science in Engineering, Systems Science and
                                    Engineering, <em>magna cum laude</em>
                                </p>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Work Experience</h2>
                        <h3>
                            <a href="https://ulteig.com">Ulteig</a> - Substation Engineering Intern <span>[Summer 2024]</span>
                        </h3>
                        <ul>
                            <li>
                                <p>Performed detailed design work on utility substation projects, including design calculations, drawing review, and outage sequencing.</p>
                            </li>
                        </ul>
                        <h3>
                            <a href="https://my.xcelenergy.com/s/">Xcel</a> - Power Operations Technical Intern <span>[January 2024 - May 2024]</span>
                        </h3>
                        <ul>
                            <li>
                                <p>Analyzed generation outage schedules to aid analysts in preparing for the MISO Planning Resource Auction.</p>
                            </li>
                            <li><p>Developed metrics tool in Databricks for exploring real time desk performance based on operations log.
                            </p>
                            </li>
                        </ul>
                        <h3>
                            <a href="https://www.workday.com/">Workday</a> - Software Engineer 3, 4 <span>[September 2019 - July 2023]</span>
                        </h3>
                        <ul>
                            <li>
                                <p>Worked within and across (mostly) client-centric teams focused on collaborative productivity-driving applications,
                                    ie a data visualization/charting library, a text editor used across the platform, a WYSIWYG email designer.
                                </p>
                            </li>
                        </ul>
                        <h3>
                            <a href="https://elasticsuite.com">Elastic Suite</a> - Full Stack
                            Software Engineer <span>[January 2018 - August 2019]</span>
                        </h3>
                        <ul className="print-hide">
                            <li>
                                <p>
                                    Worked on modernizing a legacy dojo single
                                    page app, porting existing functionality and building new
                                    features with React.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Wrote lots of tests. Unit tests. Functional component tests.
                                    End to end tests.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Occasionally worked on backend which is basically a
                                    Ruby on Rails API that hooks up with Mongo.
                                </p>
                            </li>
                        </ul>
                        <h3>
                            <a href="http://click3x.com/">Click 3X</a> - Senior Developer
                            <span>[June 2016 - December 2017]</span>
                        </h3>
                        <ul className='print-hide'>
                            <li>
                                <p>
                                    Worked on a really wide variety of client projects varying
                                    from your classic web stack to cross-platform game
                                    development, VR dev for Oculus Rift, and Three.js and WebGL
                                    experiences.
                                    <em>
                                        {' '}
                                        See <Link href="/hacking">projects</Link> page for specifics.
                                    </em>
                                </p>
                            </li>

                            <li>
                                <p>
                                    Built stuff using all the latest web development tools―React,
                                    Redux, webpack, Babel, Sass, etc.
                                </p>
                            </li>

                            <li>
                                <p>Lots of JavaScript, including Node for backend stuff.</p>
                            </li>

                            <li>
                                <p>Tinkered with a few WordPress sites.</p>
                            </li>
                        </ul>

                        <h3>
                            <a href="http://xlab.upenn.edu/">xLAB</a> - Embedded Systems
                            Engineer
                            <span>[Summer 2015]</span>
                        </h3>
                        <ul className="print-hide">
                            <li>
                                <p>
                                    Researched electroacoustics and developed a{' '}
                                    <Link href="/bombarded-by-sound">
                                        home entertainment surround sound system
                                    </Link>
                                    , using parametric arrays and reflections to deliver highly
                                    directed sound.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Experimented with different crossover configurations for
                                    traditional loudspeakers to supplement the limited bandwidth
                                    of piezoelectric transducers.
                                </p>
                            </li>
                        </ul>

                        <h3>
                            <a href="http://www.danisbassett.com/">Complex Systems Group</a> -
                            Research Assistant
                            <span>[Oct 2013 - May 2015]</span>
                        </h3>
                        <ul className="print-hide">
                            <li>
                                <p>
                                    Analyzed the structure, function, and controllability of the
                                    human musculoskeletal system from a network science
                                    perspective.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Research dynamics and community structure in brain networks.
                                </p>
                            </li>
                        </ul>

                        <h3>
                            <a href="https://www.alcoa.com/global/en/home.asp">Alcoa</a> -
                            Metallurgical & Quality Systems Intern
                            <span>[Summer 2013]</span>
                        </h3>
                        <ul className='print-hide'>
                            <li>
                                <p>
                                    Implemented process management system for anodizing alloys of
                                    aluminum.
                                </p>
                            </li>
                            <li>
                                <p>Conducted capability analysis for new rectifier.</p>
                            </li>
                            <li>
                                <p>
                                    Created conditional reaction plans for complex operations.
                                </p>
                            </li>
                        </ul>

                        <h3>
                            <a
                                href="http://www.upenn.edu/fisher/summer-mt"
                                title="Management & Technology Summer Institute"
                            >
                                M&TSI
                            </a>{' '}
                            - Teaching Assistant<span>[Summer 2015]</span>
                        </h3>
                        <ul className='print-hide'>
                            <li>
                                <p>
                                    Provided guidance for 55 high school students in engineering
                                    labs and throughout the development of their own closed loop
                                    mechatronic prototypes.
                                </p>
                            </li>
                        </ul>

                        <h3>
                            <a
                                href="https://esap.seas.upenn.edu/"
                                title="Summer Academy in Applied Science and Technology"
                            >
                                SAAST
                            </a>
                            <span className='print-hide'>*</span> - Residential Teaching Assistant
                            <span>[Summer 2014]</span>
                        </h3>
                        <ul className='print-hide'>
                            <li>
                                <p>
                                    Served as educator, mentor, and group leader of 20 high school
                                    students in the Engineering Complex Networks program.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Fostered a tight-knit community through daily social
                                    activities and weekend excursions.
                                </p>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="right print-hide">
                    <section className="print-hide">
                        <h2>Contact Info</h2>
                        <ul>
                            <li>
                                <p>
                                    Website:{' '}
                                    <a href="https://davidbaker.is/online">
                                        davidbaker.is/online
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Email:{' '}
                                    <a href="mailto:david_baker@mines.edu">
                                        david_baker@mines.edu
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </section>

                    <section className="print-hide">

                        <h2>Honors</h2>

                        <h3>
                            Frederick Ketterer Memorial Award for Outstanding Creativity in
                            Engineering Design
                            <span>[2015]</span>
                        </h3>
                        <ul>
                            <li>
                                <p>
                                    For senior design project{' '}
                                    <Link href="/a-haptics-engineer">ForceField</Link>
                                </p>
                            </li>
                        </ul>

                        <h3>
                            Dean's List<span>[2011 - 12, 2013 - 14, 2014 - 15]</span>
                        </h3>
                        <h3>
                            Glenbrook North High School Distinguished Student Award
                            <span>[2011]</span>
                        </h3>
                    </section>

                    <section className="print-hide">
                        <h2>Skills</h2>
                        <div id="skills">
                            <div>
                                <h3 className='print-hide'>Software</h3>
                                <ul>
                                    <li><p>GAMS</p></li>
                                    <li><p>Python</p></li>
                                    <li><p>Matlab, Simulink</p></li>
                                    <li>
                                        <p>JavaScript, HTML, CSS</p>
                                    </li>
                                    <li>
                                        <p>Node.js</p>
                                    </li>
                                    <li>
                                        <p>Elixir and Phoenix</p>
                                    </li>
                                    <li>
                                        <p>Postgres</p>
                                    </li>
                                    <li className='print-hide'>
                                        <p>C# (for Unity)</p>
                                    </li>
                                    <li>
                                        <p>MongoDB</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='print-hide'>Hardware/Electronics</h3>
                                <ul>
                                    <li>
                                        <p>Breadboarding, PCB Design, SPICE</p>
                                    </li>
                                    <li>
                                        <p>Arduino & Raspberry Pi</p>
                                    </li>
                                    <li>
                                        <p>Laser Cutting & 3D Printing</p>
                                    </li>
                                    <li>
                                        <p>SolidWorks</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='print-hide'>Other</h3>
                                <ul>
                                    <li>
                                        <p>
                                            Illustrator, Photoshop, After Effects, Character Animator,
                                            Blender, Figma
                                        </p>
                                    </li>
                                    <li>
                                        <p>Spanish, Japanese, Mandarin</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className='print-hide'>
                        <h2>Organizations</h2>
                        <h3>
                            <a href="http://2015s.pennapps.com/">PennApps</a> Design Team
                            <span>[2014 - 2015]</span>
                        </h3>
                        <h3>
                            Penn Engineers Without Borders<span>[2011 - 2014]</span>
                        </h3>
                    </section>
                </div>
            </main>

            <section className="annotations print-hide">
                <ul>
                    <li>
                        <p>
                            * I think the name has since changed to Engineering Summer Academy
                            at Penn.
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    </Div>
);