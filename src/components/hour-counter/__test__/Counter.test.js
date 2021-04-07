import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../Counter.js'

import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from 'react-test-renderer'

afterEach(cleanup)

it('renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Counter/>, div)
})

it('renders Counter Correctly', ()=>{
    const {getByTestId} = render(<Counter counter={1}/>)
    expect(getByTestId('counter')).toHaveTextContent("1 hours of exercises")
})
it('renders Counter Correctly', ()=>{
    const {getByTestId} = render(<Counter counter={5}/>)
    expect(getByTestId('counter')).toHaveTextContent("5 hours of exercises")
})

it('matches snapshot', ()=>{
    const tree = renderer.create(<Counter counter={3}/>).toJSON()
    expect(tree).toMatchSnapshot()
})