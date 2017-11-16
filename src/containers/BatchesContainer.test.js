import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Title from '../components/Title'
import BatchesContainer from './BatchesContainer'
import BatchItem from './BatchItem'

chai.use(chaiEnzyme())

const batches = [
  {
    batchNumber: 1,
    start_date: "2017-11-14",
    end_date: "2017-12-14",
  },
  {
    batchNumber: 2,
    start_date: "2017-12-14",
    end_date: "2018-01-14",
  },
]

describe('<BatchesContainer />', () => {
  const container = shallow(<BatchesContainer batches={ batches } />)

  it('is wrapped in a div with class name "batches"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('batches')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All Batches"', () => {
    expect(container).to.contain(<Title content="Batches" />)
  })

  it('renders all batches as a BatchItem', () => {
    expect(container).to.have.exactly(batches.length).descendants(BatchItem)
  })
})
