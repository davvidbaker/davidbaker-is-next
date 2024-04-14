import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const UL = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li {
    padding: 0 3px;
    transition: scale 0.2s;
  }

  li:hover:not(.project-link) {
    transform: scale(1.05);
  }

  li:first-child {
    padding-left: 0;
  }

  li:last-child {
    padding-right: 0;
  }

  .project-link {
    flex-grow: 1;
    font-weight: bold;
  }

  p {
    margin: 0;
  }
`;
export const ExternalLinks = ({ link, linkToSource, linkToTrello, callToAction }: { link?: string, linkToSource?: string, linkToTrello?: string, callToAction?: string }) => (
    <UL>
        <li className="project-link">
            <p>{link && <a href={link}>{callToAction || 'Check it out!'}</a>}</p>
        </li>

        {linkToSource && (
            <li>
                <a href={linkToSource}>
                    <img width="24px" height={24} src="/images/github.svg" alt="Github" />
                </a>
            </li>
        )}

        {linkToTrello && (
            <li>
                <a href={linkToTrello}>
                    <Image width={24} height={24} src="/images/trello-mark-blue.svg" alt="Trello" />
                </a>
            </li>
        )}
    </UL>
);

