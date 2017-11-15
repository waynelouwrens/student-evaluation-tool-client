import React, { Component } from 'react';
import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'

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

class App extends Component {
  render() {
    return (
      <div>
        <Title content="Student Evaluation Tool" />
        <BatchesContainer batches={ batches } />
      </div>
    );
  }
}

export default App;
