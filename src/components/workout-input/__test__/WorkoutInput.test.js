import React from 'react'
import ReactDOM from 'react-dom'

import WorkoutForm from '../WorkoutForm.js'
import getDateInInputFormat from '../scripts.js';

import { render, cleanup, act } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

import renderer from 'react-test-renderer'

const list = [
    { tempo: 1, type: 'Run', date: new Date(2011, 10, 24) },
    { tempo: 3, type: 'Swimming', date: new Date(2011, 8, 24) }
]

afterEach(cleanup)

it('renders without crashing', () => {
    const doc = document.createElement('div')
    ReactDOM.render(<WorkoutForm />, doc)
})

it('renders WorkoutInput Correctly', () => {
    const { getByTestId } = render(<WorkoutForm />)
    expect(getByTestId('form')).toHaveFormValues({
        time: 1,
        type: 'run',
        date: getDateInInputFormat()
    })
})

// it('submit Correctly', () => {
//     const callback = jest.fn()
//     let container = document.createElement('div')
//     act(()=>{
//         ReactDOM.render(<WorkoutForm onSubmit={callback}/>, container)
//     })
//     let submit = container.querySelector('form')
//     // expect(submit.innerHTML).toBe("Add")
//     act(()=>{
//         submit.dispatchEvent(new MouseEvent("click"), {bubbles: true})
//     })
//     expect(callback).toHaveBeenCalledTimes(1)
//     expect(callback).toHaveBeenCalledWith({
//         time: 1,
//         type: 'run',
//         date: getDateInInputFormat()
//     })
// })

it('matches snapshot', () => {
    const tree = renderer.create(<WorkoutForm/>).toJSON()
    expect(tree).toMatchSnapshot()
})