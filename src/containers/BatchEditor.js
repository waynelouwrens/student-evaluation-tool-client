import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../actions/batch/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

class BatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { batchNumber, start_date, end_date } = props

    this.state = {
      batchNumber,
      start_date,
      end_date,
    }
  }

  updateBatchNumber(event) {
    this.setState({
      batchNumber: this.refs.batchNumber.value
    })
  }

  updateStartDate(event) {
    this.setState({
      start_date: this.refs.start_date.value
    })
  }

  updateEndDate(event) {
    this.setState({
      end_date: this.refs.end_date.value
    })
  }

  saveBatch() {
    const {
      batchNumber,
      start_date,
      end_date
    } = this.state

  const batch = {
    batchNumber,
    start_date,
    end_date,
  }
  this.props.createBatch(batch)
}

render() {
  return (
  <div className="editor">
    <input
      type="text"
      ref="batchNumber"
      className="batchNumber"
      placeholder="Batch Number?"
      defaultValue={this.state.batchNumber}
      onChange={this.updateBatchNumber.bind(this)}
      onKeyDown={this.updateBatchNumber.bind(this)} />

    <input
      type="text"
      ref="start_date"
      className="start_date"
      placeholder="Start Date??"
      defaultValue={this.state.start_date}
      onChange={this.updateStartDate.bind(this)}
      onKeyDown={this.updateStartDate.bind(this)} />

    <input
      type="text"
      ref="end_date"
      className="end_date"
      placeholder="End Date?"
      defaultValue={this.state.end_date}
      onChange={this.updateEndDate.bind(this)}
      onKeyDown={this.updateEndDate.bind(this)} />

  <div className="actions">
    <button className="primary" onClick={this.saveBatch.bind(this)}>CREATE NEW BATCH</button>
  </div>
</div>
)
}
}


export default connect(null, { createBatch })(BatchEditor)
