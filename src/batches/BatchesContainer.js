import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import BatchItem from './BatchItem'
import './BatchesContainer.css'
import BatchEditor from './BatchEditor'

class BatchesContainer extends PureComponent {
  renderBatch(batch, index) {
    return <BatchItem key={index} { ...batch } />
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <Title content="Batches" />
        </header>

        <main>
          { this.props.batches.map(this.renderBatch.bind(this)) }
          <BatchEditor />
        </main>
      </div>
    )
  }
}

const mapStatetoProps = ({ batches}) => ({
  batches
})

export default connect(mapStatetoProps)(BatchesContainer)
