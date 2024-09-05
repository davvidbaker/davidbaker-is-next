"use client"
import { ReactNode } from "react"
import styled from "styled-components"
import hljs from "highlight.js"
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types"
import { get_color as xkcd } from 'xkcd-colors'
import { MathJax } from "better-react-mathjax"

const Grid = styled.div`
display: grid;
grid-template-columns: 0.5fr 2fr 1fr;
background: ${xkcd("eggshell")};
margin-bottom: 4px;
padding: 10px;

h4 {
margin-top: 4px;
}
`

export const k = (s: TemplateString) => s.raw[0]


export const Parameters = ({ params }: { params: { variable: ReactNode, description: ReactNode, units: ReactNode }[] }) => <>
    <Grid>
        <h4 style={{ borderBottom: "1px solid darkgrey", marginBottom: "4px", gridColumn: "1  / span 2" }}>Parameters</h4>
        <h4 style={{ borderBottom: "1px solid darkgrey", marginBottom: "4px", gridColumn: "3" }}>Units</h4>
        <>{params.map(({ variable, description, units }) => [<div>{variable}</div>, description, <div>{units}</div>])}</>
    </Grid>
</>

export const DecisionVariables = ({ params }: { params: { variable: ReactNode, description: ReactNode, units: ReactNode }[] }) => <>
    <Grid>
        <h4 style={{ borderBottom: "1px solid darkgrey", marginBottom: "4px", gridColumn: "1  / span 2" }}>Decision Variables</h4>
        <h4 style={{ borderBottom: "1px solid darkgrey", marginBottom: "4px", gridColumn: "3" }}>Units</h4>
        <>{params.map(({ variable, description, units }) => [<div>{variable}</div>, description, <div>{units}</div>])}</>
    </Grid>
</>

export const SetsAndIndices = () => <>
    <Grid>
        <h4 style={{ borderBottom: "1px solid darkgrey", marginBottom: "4px", gridColumn: "1  / span 3" }}>Sets and Indicies</h4>
        <Math>{k`\[i \in \mathcal{I}\]`}</Math>
        <div>baked goods</div>
        <Math>{k`\[i \in \{\text{rolls}, \text{croissants}, \text{bread loafs}\}\]`}</Math>
    </Grid>
</>

export const Math = ({children}) => {
    return <MathJax style={{display: 'inline'}} suppressHydrationWarning>{children}</MathJax>
}

export const TwoColumnEquations = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
margin: 0 100px;

p {
margin: 0;
}
`

const Pre = styled.pre`
margin: 10px;
padding: 1rem;
overflow-x: scroll;
border-radius: 10px;

`;



const Language = styled.span`
display: inline-block;
text-align: right;
font-size: 10px;
font-family: monospace;
color: #eee;
`

const Wrapper = styled.div`
background: #0d1117;
border-radius: 10px;
margin: 12px;
`

const Filename = styled.span`

`

const FileInfo = styled.div`
font-family: monospace;
color: #fff;
background: #444;
border-radius: 10px 10px 0 0;
padding: 12px;
display: flex;
justify-content: space-between;
align-items: center;



`
export const CodeSnippet = ({ rawStr }: { rawStr: string }) => {
    const html = hljs.highlightAuto(rawStr).value

    return (
        <Wrapper>
            <FileInfo>
                <Filename>q1.gms</Filename>
                <Language>GAMS</Language>
            </FileInfo>
            <Pre className="hljs theme-github-dark"><code className="language-gams" dangerouslySetInnerHTML={{ __html: html }}></code></Pre>
        </Wrapper>
    )
}
