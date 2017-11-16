import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../actions/batches/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, photo } = props

    this.state = {
      name,
      photo,
    }
  }

  updateName(event) {
    this.setState({
      name: this.refs.batchNumber.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  saveStudent() {
    const {
      name,
      photo,
    } = this.state

  const student = {
    name,
    photo,
  }
  this.props.createStudent(student)
}

render() {
  return (
    <div className="editor">
      <input
        type="text"
        ref="name"
        className="name"
        placeholder="Student Name?"
        defaultValue={this.state.name}
        onChange={this.updateName.bind(this)}
        onKeyDown={this.updateName.bind(this)} />

      <input
        type="text"
        ref="photo"
        className="photo"
        placeholder="Add a photo url"
        defaultValue={this.state.photo}
        onChange={this.updatePhoto.bind(this)}
        onKeyDown={this.updatePhoto.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>ADD NEW STUDENT</button>
        </div>
      </div>
    )
  }
}


export default connect(null, { createBatch })(StudentEditor)
