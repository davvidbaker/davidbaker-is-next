import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image'

/* ⚠️ rather haphazard to do this 🤷 */
import FlambeLogo from '@flambe/logo';
// import Router from 'next/router';

import { ExternalLinks } from '../../components/ExternalLinks';
import { Status } from '../../components/Status';

const Teaser = styled.div`
  flex: 2;
  align-self: center;
  z-index: 1;
  width: 100%;
  position: relative
`;

const LI = styled.li`
  display: flex;
  flex-direction: column;
  border: solid #cecece 1px;
  padding: 10px;
  background: white;
  position: relative;

  ${({ gridColumn }) => (gridColumn ? `grid-column: ${gridColumn}` : '')};
  ${({ gridRow }) => (gridRow ? `grid-row: ${gridRow}` : '')};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  h1 {
    margin: 0;
    line-height: 1;
  }

  h1 span {
    color: #ddd;
    font-size: smaller;
  }

  .tagline {
    flex: 1;
  }

  ul {
    display: flex;
  }
`;

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = (years: string) => String(years).replace(',', '‑');

export const ProjectItem = ({
    name = '[Name Here]',
    path,
    tagline = 'tagline',
    highlight = false,
    status,
    description,
    year,
    link,
    linkToSource,
    linkToTrello,
    callToAction = 'Check it out',
    focused,
    focus,
    unfocus,
    showAdditionalInfo,
    agency,
    gridColumn,
    gridRow,
}) => {
    return (
        <LI
            className={`project ${highlight && 'highlight-project'}`}
            onMouseEnter={focus}
            onMouseLeave={unfocus}
            /* ⚠️ Idk If I like this pattern */
            {...{ gridRow, gridColumn }}
        >
            <h1>
                {name} <span>{year && formatYears(year)}</span>
            </h1>
            {status && <Status status={status} focused={focused} />}
            <p className="tagline">{tagline}</p>
            {(name === 'flambé' || name === 'Udder Space') && (
                <Teaser>
                    {name === 'flambé' && <Image fill src="/images/flambe-wide.png"  style={{objectFit: "contain"}}
                    alt="" />}
                    {name === 'Udder Space' && <Image fill src="/images/ribeye.png"  style={{objectFit: "contain"}}
                    alt="" />}
                </Teaser>
            )}
            {description ? <Link href={`/${path}`}>Read more...</Link> : null}
            <ExternalLinks {...{ link, linkToSource, linkToTrello, callToAction }} />
        </LI>
    );
};

ProjectItem.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    status: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    year: PropTypes.arrayOf(PropTypes.number),
    callToAction: PropTypes.string,
    link: PropTypes.string,
    linkToSource: PropTypes.string,
    linkToTrello: PropTypes.string,
};
