import React from 'react'
import ReactDOM from 'react-dom'
import WorkoutRow from '../WorkoutRow.js'

import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from 'react-test-renderer'

const list = [
    { tempo: 1, type: 'Run', date: new Date(2011, 10, 24) },
    { tempo: 3, type: 'Swimming', date: new Date(2011, 8, 24) }
]

afterEach(cleanup)

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<WorkoutRow/>, div)
})

it('renders Counter Correctly', ()=>{
    const {getByTestId} = render(<WorkoutRow item={{
        col1: 1,
        col2: 'teste',
        col3: 'date',
        id: 0
    }}/>)
    expect(getByTestId('row-0')).toHaveTextContent("1testedate")
})

it('renders Counter Correctly', ()=>{
    const {getByTestId} = render(<WorkoutRow  item={{
        col1: list[1].tempo,
        col2: list[1].type,
        col3: list[1].date.toLocaleDateString(),
        id: 1
    }}/>)
    expect(getByTestId('row-1')).toHaveTextContent("3Swimming9/24/2011")
})

it('matches snapshot', ()=>{
    const tree = renderer.create(<WorkoutRow item={{...list[1], id: 1}}/>).toJSON()
    expect(tree).toMatchSnapshot()
})