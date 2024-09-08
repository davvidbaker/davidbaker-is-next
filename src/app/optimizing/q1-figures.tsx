"use client"
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import profits from './q1-profits.csv'
import items from './q1-items.csv'
// @ts-ignore
import { get_color as xkcd } from 'xkcd-colors'
import styled from "styled-components";


export const Figure1 = () => {
    const containerRef = useRef();
    const [data, setData] = useState(d3.csvParseRows(profits, (d, i) => ({
        case: d[0],
        profit: d[1]
    })));


    useEffect(() => {
        // d3.csvParse(results, d3.autoType)
    }, []);

    useEffect(() => {
        if (data === undefined) return;
        const plot = Plot.plot({
            width: 200,
            y: { grid: true },
            // color: { scheme: "spectral" },
            marks: [
                Plot.ruleY([0]),
                Plot.barY(data, { x: "case", y: "profit", fill: "case" }),
                Plot.axisX({ anchor: "bottom", label: null }),
                Plot.axisY({ label: "profit [$]" }),
            ]
        });
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <div ref={containerRef} />;
}


const counts = d3.csvParse(items, (d, i) => ({
    item: d[""],
    ...d
}));

const flatCounts = counts.flatMap(d => [{
    item: d.item, case: 'business as usual', value: d['business as usual']
}, { item: d.item, case: 'combo', value: d.combo }])

const Container = styled.div`
padding: 30px;
`

export const Figure2 = () => {
    const containerRef = useRef();
    const [data, setData] = useState(counts);

    console.log('❤️‍🔥 data', data);

    useEffect(() => {
        setData(counts)
    }, []);


    useEffect(() => {
        if (data === undefined) return;
        const plot = Plot.plot({
            marginLeft: 100,
            width: 400,
            x: { grid: true },
            y: { axis: null, },
            facet: {
                data: flatCounts,
                y: d => d.item,
            },
            fy: {
                // tickRotate: -45,
                // padding: 0.8
            },
            color: { legend: true },
            marks: [
                // Plot.ruleY([0]),
                Plot.barX(flatCounts, Plot.groupY({ x: 'identity' }, { y: "case", x: "value", fill: "case" })),
                Plot.axisX({ label: "quantity baked" }),
            ]
        });
        containerRef?.current.append(plot);
        return () => plot.remove();
    }, [data]);

    return <Container><div ref={containerRef} /></Container>;
}
