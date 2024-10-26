"use client"

import { MathJaxContext } from "better-react-mathjax"
import { createContext, useContext, useState } from "react"

// @ts-ignore
export const EquationContext = createContext()

export default function MdxLayout({ children }: { children: React.ReactNode }) {

    const [equationKeys, registerEquation] = useState([])

    // Create any shared layout or styles here
    return <EquationContext.Provider value={{ equationKeys, registerEquation }}>
        <MathJaxContext>
            <div style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "0 20px"
            }}>
                {children}</div>
        </MathJaxContext>
    </EquationContext.Provider>
}
