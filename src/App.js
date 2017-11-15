import React, { Component } from 'react';
import Title from './components/Title'
import BatchesContainer from './batches/BatchesContainer'

class App extends Component {
  updateBatch(id, update) {

  }

  render() {
    return (
      <div>
        <Title content="Student Evaluation Tool" />
        <BatchesContainer
          updateBatch={ this.updateBatch.bind(this) } />
      </div>
    );
  }
}

export default App;
