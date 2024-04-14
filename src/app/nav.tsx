"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FadedLI = styled.li`
opacity: 0.2;`

const Wrapper = styled.nav`
  width: 100%;
  overflow: hidden;

  ul {
    display: flex;
    justify-content: center;
    width: 100vw;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
  }
  li:hover {
  }
  a {
    display: block;
    color: #ccc;
    margin: 0 10px;
    line-height: 3em;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: #222;
  }

  .active {
    cursor: default;
    color: #222;
  }
  
  @media print {
    .print-hide,
    .print-hide::before,
    .print-hide::after {
        display: none !important;
    }
}
`;

const activeStyle = {
    cursor: 'default',
    color: '#222',
};

/** 💁 root path was matching for all other paths, so I am not using activeStyle prop, but a class instead, for just that link */
const Nav = ({ }) => {
    const pathname = usePathname()

    console.log('❤️‍🔥 pathname', pathname);

    return (<Wrapper>
        <ul className='print-hide'>
            <li>
                <Link
                    className={
                        pathname === '/' || pathname === '/online'
                            ? 'active'
                            : undefined
                    }
                    href="/online"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link href="/hacking" className={
                    pathname === '/hacking'
                        ? 'active'
                        : undefined
                }>
                    Projects
                </Link>
            </li>
            <li>
                <Link href="/looking-for-work" className={
                    pathname === '/looking-for-work'
                        ? 'active'
                        : undefined
                }>
                    Résumé
                </Link>
            </li>
            <FadedLI>
                <Link href="https://davidbaker-is-dvrr3g2fc-davvidbaker.vercel.app/scribbling">
                    Old Scribbles
                </Link>
            </FadedLI>
        </ul>
    </Wrapper>
    )
};

// const Nav = () => <div>asdf</div>
export default Nav;
