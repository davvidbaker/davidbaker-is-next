"use client"
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from "next/image";

import CycleItems from '../../components/CycleItems';

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
    <h2>graduate student in advanced energy systems</h2>
    <ul>
      <li>
        <a href="https://github.com/davvidbaker">
          <Image width={35} height={35} src="/images/github.svg" alt="Github" />
        </a>
      </li>
    </ul>
  </header>
    <article>
      <h2>Hello!</h2>
      <p>You're probably here because I am applying for a job!</p>
      <p>I am currently pursuing my master's in <a href="https://energysystems.mines.edu/">Advanced Energy Systems at Colorado School of Mines</a>, where I am specializing in power systems engineering.</p>

      <p>

        I spent the last eight years as a software engineer, mostly doing frontend work, most recently at <a href="https://www.workday.com/">Workday</a>. I ❤️ making stuff, and I love how quickly you can turn ideas into reality with modern tools.
        My career experiences in the enterprise software industry have taught me how to work collaboratively across large organizations to build creative, sustainable solutions.
        Now I am applying my skills to fighting climate change via increased electrification and integrating distributed energy resources.
      </p>

      <p>
        You can find some old projects—mostly software—on the{' '}
        <Link href="/hacking">
          projects page
        </Link>.{' '}
        You'll find a mix of old client work and
        (unpolished) personal projects.
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