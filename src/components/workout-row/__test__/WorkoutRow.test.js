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

list[0].date.toLocaleDateString()

// afterEach(cleanup)

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<WorkoutRow/>, div)
})

it('renders Counter Correctly', ()=>{
    const {getByTestId} = render(<WorkoutRow item={list[0]} id={0}/>)
    expect(getByTestId('row-0')).toHaveTextContent("1Run11/24/2011")
})

it('renders Counter Correctly', ()=>{
    const {getByTestId} = render(<WorkoutRow  item={list[1]} id={1}/>)
    expect(getByTestId('row-1')).toHaveTextContent("3Swimming9/24/2011")
})

it('matches snapshot', ()=>{
    const tree = renderer.create(<WorkoutRow counter={3}/>).toJSON()
    expect(tree).toMatchSnapshot()
})