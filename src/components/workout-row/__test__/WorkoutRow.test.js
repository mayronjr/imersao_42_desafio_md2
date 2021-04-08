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

it('renders without crashing', () => {
    const doc = document.createElement('table')
    doc.appendChild(document.createElement('tbody'))
    ReactDOM.render(<WorkoutRow />, doc)
})

it('renders WorkoutRow Correctly', () => {
    const { getByTestId } = render(<table><tbody>
        <WorkoutRow item={{
            col1: 1,
            col2: 'teste',
            col3: 'date',
            id: 0
        }} />
    </tbody></table>)
    expect(getByTestId('row-0')).toHaveTextContent("1testedate")
})

it('renders WorkoutRow Correctly', () => {
    const { getByTestId } = render(<table><tbody>
        <WorkoutRow item={{
            col1: list[1].tempo,
            col2: list[1].type,
            col3: list[1].date.toLocaleDateString(),
            id: 1
        }} />
    </tbody></table>)
    expect(getByTestId('row-1')).toHaveTextContent("3Swimming9/24/2011")
})

it('matches snapshot', () => {
    const tree = renderer.create(<table><tbody>
        <WorkoutRow item={{
            col1: list[1].tempo,
            col2: list[1].type,
            col3: list[1].date.toLocaleDateString(),
            id: 1
        }} />
    </tbody></table>).toJSON()
    expect(tree).toMatchSnapshot()
})