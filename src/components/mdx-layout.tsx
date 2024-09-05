"use client"

import { MathJaxContext } from "better-react-mathjax"

export default function MdxLayout({ children }: { children: React.ReactNode }) {

    // Create any shared layout or styles here
    return <MathJaxContext>
        <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 20px"
        }}>
            {children}</div>
    </MathJaxContext>
}
