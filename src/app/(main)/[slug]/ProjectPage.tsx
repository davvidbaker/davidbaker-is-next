"use client"
import React from 'react';
import { marked } from 'marked';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ExternalLinks } from '../../../components/ExternalLinks';
import { Status } from '../../../components/Status';
import { Project } from '../hacking/page'
import Image from 'next/image';
// class ProjectTemplate extends React.Component {
//   render() {
//     return <Layout location={this.props.location}><ProjectDetails {...this.props.data.projectsJson} /></Layout>;
//   }
// }

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = (years: number[]) => String(years).replace(',', '‑');

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 50rem;
  margin: 0 auto;
  // width: 100%;

  code {
    font-size: large;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 3rem;

    h1 {
      font-size: 1.5em;
    }
  }

  .heading div {
    display: flex;
  }

  .logo {
    float: left;
    height: 50px;
    margin: 5px 5px 5px 0;
  }

  .gallery {
    margin: 1em 0;
    text-align: center;
    grid-column-end: 1;
    height: auto;
    min-height: 300px;
  }

  .gallery video {
  }

  .gallery img,
  .gallery video {
    grid-column-end: span 1;
    box-shadow: 0 0 20px 2px #888;
    width: 100%;
  }

  .gallery img:hover,
  .gallery video:hover {
    z-index: 2;
  }

  .gallery img:nth-of-type(2) {
    margin-top: 1em;
  }

  .gallery div {
    height: 200px;
    width: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  h1 {
    margin: 0;
    line-height: 1;
  }

  h1 span {
    color: #ddd;
    font-size: smaller;
  }

  #additional-info {
    height: 100%;
  }

  .about-project {
    display: grid;
    grid-template-columns: auto;
    flex-direction: column;
  }

  .description {
    line-height: 1.5;
    max-width: 50rem;
  }

  .flex-list {
    min-height: 2rem;
    display: flex;
    margin-left: 2rem;
    border-left: 1px solid #222;
  }

  .flex-list li {
    padding: 5px;
    margin: 5px 0;
    transition: background 0.3s;
  }

  .flex-list li:hover::before {
    opacity: 1;
    text-decoration: none;
  }

  .flex-list:last-of-type::after {
    content: '🍺';
    opacity: 0;
  }

  .bonus-blocks {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    flex-wrap: wrap;
  }

  .bonus-block {
    color: #222;
    margin-top: 1em;
    margin-right: 1em;
    flex-wrap: wrap;
  }

  .bonus-block:last-of-type {
    margin-right: 0;
  }

  .bonus-block h3 {
    margin: 5px auto;
    padding: 0 10px;
    padding-top: 0.25em;
    text-align: left;
  }

  .keywords li::before {
    content: '🐝 ';
    font-size: small;
    opacity: 0;
  }

  .teammates li::before {
    content: '🍻 ';
    font-size: small;
    opacity: 0;
  }

  .agency li::before {
    content: '🏢 ';
    font-size: small;
    opacity: 0;
  }

   .flex-list {
      flex-flow: row wrap;
    }

  @media (min-width: 75rem) {
    #additional-info {
      max-width: 75rem;
    }

    .about-project {
      grid-template-columns: 55rem 1fr 15rem;
    }

    .description {
      max-width: 55rem;
    }

    .bonus-blocks {
      grid-column-start: 3;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 0;
    }
    .bonus-block {
      margin-right: 0;
    }
    .bonus-block:first-of-type {
      margin-top: 0.25rem;
    }

    .bonus-block h3 {
      text-align: ;
    }

    .flex-list {
      flex-direction: column;
    }

    .gallery img,
    .gallery video {
      max-width: 55rem;
    }
    

    .flex-list:last-of-type::after {
      content: '';
      opacity: 0;
    }
  }
`;

export const ProjectPage = (props: Project) => {
  console.log('props', props)

  const {
    name = '[Name Here]',
    status,
    description,
    year,
    link,
    linkToSource,
    linkToTrello,
    callToAction = 'Check it out',
    videos,
    images,
    keywords,
    teammates,
    logo,
    agency,
    pdfs,
    pdfText,
  } = props

  return (
    <Div id="additional-info" >
      <div className="heading">
        <div>
          <h1 style={{ marginRight: '5px', transform: 'translateY(3px)' }}>
            {name} <span>{year && formatYears(year)}</span>
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          {status && <Status status={status} />}

          <ExternalLinks
            {...{ link, linkToSource, linkToTrello, callToAction }}
          />
        </div>
      </div>


      <section className="about-project">
        <div className="description-and-gallery">
          {description ? (
            <p className="description">
              {logo && <img className="logo" src={logo} alt={`${name} logo`} />}
              <span
                className="markdown"
                dangerouslySetInnerHTML={{ __html: marked(description) }}
              />
            </p>
          ) : null}
          {pdfs &&
            pdfs.map((pdf, i) => (
              pdfText?.[i] ?
                <p key={pdf}><a href={`/pdfs/${pdf}`}>{pdfText[i]}</a></p>
                :
                <p key={pdf}>See the report <a href={`/pdfs/${pdf}`}>here</a>.</p>
            ))}

          <div className="gallery" style={{ position: 'relative' }}>
            {images &&
              images.map(image => (
                <Image
                  className="w-full h-auto"
                  width="0"
                  height="0"
                  sizes="50vw"
                  key={image}
                  src={`/images/${image.replace('-noShadow', '')}`}
                  alt={image}
                  style={{
                    ...(image.match(/-noShadow$/) ? { boxShadow: '0 0 white' } : undefined),
                    objectFit: 'contain'
                  }}
                />
              ))}
            {videos &&
              videos.map(video => (
                <video
                  loop
                  controls
                  muted
                  autoPlay
                  src={`/images/${video}`}
                  key={video}
                />
              ))}

          </div>
        </div>
        <div className="bonus-blocks">
          {keywords && (
            <div className="bonus-block keywords-container">
              <h3>Buzz Words 🐝</h3>
              <ul className="keywords flex-list">
                {keywords.map(word => (
                  <li key={word}>
                    <span>{word.replace(/\s/, ' ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {teammates && (
            <div className="bonus-block teammates-container">
              <h3>Teammates 🍻</h3>
              <ul className="teammates flex-list">
                {teammates.map(teammate => (
                  <li key={teammate.name}>
                    <a href={teammate.link}>
                      <span>{teammate.name.replace(/\s/, ' ')}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {agency && (
            <div className="bonus-block agency-container">
              <h3>Agency 🏢</h3>
              <ul className="agency flex-list">
                <li>
                  <a href={agency.link}>
                    <span>{agency.name.replace(/\s/, ' ')}</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </Div >
  )
}
ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  status: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  year: PropTypes.array,
  callToAction: PropTypes.string,
  link: PropTypes.string,
  linkToSource: PropTypes.string,
  linkToTrello: PropTypes.string,
};