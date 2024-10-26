"use client"
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
`

const Center = styled.div`
text-align: center;
font-weight: bold;
`

const Right = styled.div`
text-align: right;
`


const Left = styled.div`
`

interface Texts {
    leftText: string,
    centerText: string,
    rightText: string
}
export const Heading = ({ leftText, centerText, rightText }: Texts) =>

    <>
        <Grid>
            <Left>{leftText}</Left>
            <Center>{centerText}</Center>
            <Right>{rightText}</Right>
        </Grid>
        <hr />
    </>
