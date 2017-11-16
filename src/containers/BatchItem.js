import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BatchItem extends PureComponent {
  static propTypes = {
    batchNumber: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired
  }
  render() {
    const { batchNumber, start_date, end_date } = this.props

    return(
      <article className="batch">
        <h1>Batch # { batchNumber }</h1>
        <div>
          <p>{ start_date } to { end_date }</p>
        </div>
      </article>
    )
  }
}

export default BatchItem
