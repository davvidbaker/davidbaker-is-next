"use client"
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import beans from './q2-beans.csv'
// @ts-ignore
import { get_color as xkcd } from 'xkcd-colors'
import styled from "styled-components";


const colormap = {
    blue: xkcd('bright blue'),
    green: xkcd('leaf green'),
    yellow: xkcd('goldenrod'),
    orange: xkcd('tangerine'),
    purple: xkcd('dull purple'),
}

const counts = d3.csvParseRows(beans, (d) => ({
    machine: d[0],
    // @ts-ignore
    bean: colormap[d[1]],
    case: d[2],
    value: Number(d[3]),
    stroke: d[0] == 'X1' ? 'black' : 'grey',
}))

console.log('❤️‍🔥 counts', counts);
const Container = styled.div`
padding: 30px;
`

export const Figure1 = () => {
    const containerRef = useRef();
    const [data, setData] = useState(counts);

    useEffect(() => {
        setData(counts)
    }, []);


    useEffect(() => {
        if (data === undefined) return;
        const plot = Plot.plot({
            // marginLeft: 100,
            width: 400,
            y: { grid: true },
            x: {
                tickRotate: 90,
            },
            facet: {
                data: counts,
                x: d => d.case,
            },
            marks: [
                Plot.barY(counts, Plot.groupX({ y: 'identity' }, { x: "machine", y: "value", fill: "bean" })),
                Plot.axisX({ label: null }),
                Plot.axisY({ label: "jellybeans produced" }),

            ]
        });
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <Container><div ref={containerRef} /></Container>;
}


export const Figure2 = () => {
    const containerRef = useRef();
    const [data, setData] = useState(counts);

    useEffect(() => {
        setData(counts)
    }, []);


    useEffect(() => {
        if (data === undefined) return;
        const plot = Plot.plot({
            marginLeft: 80,
            width: 400,
            y: { grid: true, },
            x: {
                tickRotate: 90,
            },
            facet: {
                data: counts,
                x: d => d.case,
            },
            marks: [
                Plot.barY(counts, { x: 'bean', y: 'value', fill: 'bean', stroke: 'black' }), //, Plot.groupX({ y: 'sum' }, { x: "bean", y: "value", fill: "bean" })),
                Plot.text(counts, {
                    x: 'bean', y: (d, _i, arr) => {
                        if (d.value < 10) return null;

                        if (d.machine === 'X1') return d.value / 2;

                        console.log('❤️‍🔥 d, arr', d, arr);


                        const other = arr.find(a => { return a.case === d.case && a.bean === d.bean && a.machine === 'X1' })

                        console.log('❤️‍🔥 other', other);

                        return d.value / 2 + (other?.value ?? 0)

                    }, fill: 'black', text: 'machine', title: 'machine',
                }), //, Plot.groupX({ y: 'sum' }, { x: "bean", y: "value", fill: "bean" })),
                Plot.axisX({ ticks: [], label: "bean distribution" }),
                Plot.axisY({ label: "jellybeans produced", labelAnchor: 'center' }),

            ]
        });
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <Container><div ref={containerRef} /></Container>;
}