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

export const Heading = () =>

    <>
        <Grid>
            <Left>Fall 2024</Left>
            <Center>EBGN645 Computational Economics - HW 1</Center>
            <Right>David Baker</Right>
        </Grid>
        <hr />
    </>
