"use client"
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import beans from './q2-beans.csv'
// @ts-ignore
import profitsRaw from './q2-profits.csv'
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

const Container = styled.div`
padding: 30px;
`

export const Figure1 = () => {
    const containerRef = useRef(null);
    const [data, setData] = useState(counts);

    useEffect(() => {
        setData(counts)
    }, []);


    useEffect(() => {
        if (data === undefined) return;
        const plot = Plot.plot({
            marginLeft: 60,
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
                Plot.axisY({ label: "jellybeans produced", labelAnchor: 'center' }),


            ]
        });
        // @ts-ignore
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <Container><div ref={containerRef} /></Container>;
}


export const Figure2 = () => {
    const containerRef = useRef(null);
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
                    // @ts-ignore
                    x: 'bean', y: (d, _i, arr) => {
                        if (d.value < 10) return null;

                        if (d.machine === 'X1') return d.value / 2;

                        // @ts-ignore
                        const other = arr.find(a => { return a.case === d.case && a.bean === d.bean && a.machine === 'X1' })

                        return d.value / 2 + (other?.value ?? 0)

                    }, fill: 'black', text: 'machine',
                }), //, Plot.groupX({ y: 'sum' }, { x: "bean", y: "value", fill: "bean" })),
                Plot.axisX({ ticks: [], label: "bean production profile" }),
                Plot.axisY({ label: "jellybeans produced", labelAnchor: 'center' }),

            ]
        });
        // @ts-ignore
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <Container><div ref={containerRef} /></Container>;
}


const profits = d3.csvParseRows(profitsRaw, (d) => ({
    case: d[0],
    value:Number(d[1])
}));


export const FigureProfits = () => {
    const containerRef = useRef(null);
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
            marks: [
                Plot.barY(profits, { x: 'case', y: 'value', fill: xkcd('green blue')}),
                Plot.text(profits, {
                    x: 'case', y: d=>d.value + 140,
                    fill: 'black', text: 'value',
                }),
                Plot.axisX({ label: null }),
                Plot.axisY({ label: "Profits [$]", labelAnchor: 'center' }),

            ]
        });
        // @ts-ignore
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <Container><div ref={containerRef} /></Container>;
}
