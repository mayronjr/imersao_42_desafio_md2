import React from 'react'
import ReactDOM from 'react-dom'
import WorkoutList from '../WorkoutList.js'

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
    ReactDOM.render(<WorkoutList/>, div)
})

it('renders WorkoutList Correctly', ()=>{
    const {getByTestId} = render(<WorkoutList list={list}/>)
    expect(getByTestId('row-0')).toHaveTextContent("1Run11/24/2011")
    expect(getByTestId('row-1')).toHaveTextContent("3Swimming9/24/2011")
})

it('matches snapshot', ()=>{
    const tree = renderer.create(<WorkoutList list={list}/>).toJSON()
    expect(tree).toMatchSnapshot()
})