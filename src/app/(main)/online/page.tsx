"use client"
import React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import Image from "next/image";

import CycleItems from '../../../components/CycleItems';

const wave = keyframes`
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(12deg); }
`;

const WavingHand = styled.span`
  display: inline-block;
  transform-origin: 70% 80%;
  animation: ${wave} 1.2s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 20px;

  ul {
    list-style: none;
    padding: 0;
  }

  header h1 {
    font-size: 4rem;
    text-align: center;
    margin: 0 auto;
  }

  header h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: lighter;
    color: #999;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  header ul {
    display: flex;
    justify-content: center;
  }

  header li {
    width: 35px;
    margin-right: 20px;
    position: relative;
  }
  header li:last-of-type {
    margin-right: 0;
  }

  header li::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: white;
    opacity: 0.5;
    pointer-events: none;
  }

  header li:hover::before {
    opacity: 0;
  }

  article {
    color: #222;
    line-height: 1.5;
  }
`;

const IndexPage = () => <div>
  <Main><header>
    <h1>David Baker</h1>
    <h2>software and data for energy systems</h2>
    <ul>
      <li>
        <a href="https://github.com/davvidbaker">
          <Image width={35} height={35} src="/images/github.svg" alt="Github" />
        </a>
      </li>
    </ul>
  </header>
    <article>
      <h2><WavingHand>👋</WavingHand> Hello!</h2>
      <p>I spent almost ten years building production enterprise software for productivity technologies. Then I went back to school to get an M.S. in <a href="https://energysystems.mines.edu/">Advanced Energy Systems at Colorado School of Mines</a> and moved my domain of focus to energy systems: power markets, grid modeling, optimization, and data engineering.</p>

      <p>Electrification, and actually decarbonizing the grid, are among the most important things we can do about the climate crisis. The next few decades need a much bigger grid, and a different one. Planning that well depends on good data, good models, and tools that hold up.</p>

      <p>These days I work on capacity expansion and production cost modeling, using Enelytix, PSO, and EnCompass, plus Python, SQL, optimization, and data engineering.</p>

      <p>What I want is for that modeling to scale, to be reproducible, and to be useful when the decision is a real one about the grid we end up building.</p>

      <p>
        Recent personal projects, and a bunch of older stuff, is on the{' '}
        <Link href="/hacking">
          projects page
        </Link>.{' '}
        The old stuff is a mix of client work and personal projects. I can't post much detail about what I work on now for my job, but trust me it's really good 😉.
      </p>

      <hr />
      <h3>Here are some things you might want to know about me.</h3>
      <ul className="about-list">
        <CycleItems
          // @ts-ignore
          start="I believe in"
          items={[
            "fuel cell EVs for heavy duty transport.",
            'humanity.',
            'engineering.',
            'design that serves a purpose.',
            'the potential of the internet to make positive change in the world.',
            'myself occasionally 🙃.',
            'the merits of iterative design.',
            'data-driven decisions.',
          ]}
        />
        <CycleItems
          // @ts-ignore
          start="I would like to work"
          items={[
            'alongside smart, talented people who are passionate about what they do.',
            'on projects that aim to combat climate change.',
            'on useful products that I believe in.',
            'with folks who value quality code.',
          ]}
        />
        <CycleItems
          // @ts-ignore
          start="I am interested in"
          items={[
            'power system modeling.',
            'distributed energy resources.',
            'pumped hydro storage.',
            'power electronics.',
            'the internet of things.',
            'rapid prototyping.',
            'artificial intelligence.',
            'intelligence.',
            'batteries.',
            'electricity and magnetism.',
            'sustainability.',
            'linear optimization',
            'the future of the internet 🌐.',
            'education.',
          ]}
        />
        <CycleItems
          // @ts-ignore
          start="I am"
          items={[
            'mistrustful of untested code.',
            'a sucker for @beesandbombs 🐝💣 GIFs.',
            'always trying to do meaningful work.',
            'Ron Burgundy?',
            'a hard worker.',
            'a problem solver.',
          ]}
        />
      </ul>
    </article>
  </Main></div>


export default IndexPage
