"use client"
import { Heading } from "@/components/Heading"

import codeBlock from "@/../public/images/optimizing/q1.gms"
import { CodeSnippet, Constraints, DecisionVariables, Parameters, SetsAndIndices } from "@/components/optimization"

export const k = (s) => s.raw[0]



const Page = () => <div><Heading /><SetsAndIndices />

</div>

export default Page