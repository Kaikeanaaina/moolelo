const React = require('react')
const Modal = require('react-modal')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class PreviewModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.afterOpenModal = this.afterOpenModal.bind(this)
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  render () {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={this.props.contentLabel} >

          <h4 ref='subtitle'>Confirm New Artist</h4>
          <label>
            <h2>title: {this.props.object.title}</h2>
          </label>
          <label>
            <h2>Description: {this.props.object.description}</h2>
          </label>
          <label>
            <h2>Starting Month: {this.props.object.startingMonth}</h2>
          </label>
          <label>
            <h2>Starting Day: {this.props.object.startingDay}</h2>
          </label>
          <label>
            <h2>Starting Year: {this.props.object.startingYear}</h2>
          </label>
          <label>
            <h2>Ending Month: {this.props.object.endingMonth}</h2>
          </label>
          <label>
            <h2>Ending Day: {this.props.object.endingDay}</h2>
          </label>
          <label>
            <h2>Ending Year: {this.props.object.endingYear}</h2>
          </label>
          <label>
            <h2>HashTags: {this.props.object.hashTags}</h2>
          </label>
          <button onClick={this.props.closeModal}>cancel</button>
          <button onClick={this.props.onSubmit}>submit</button>
        </Modal>
      </div>
    )
  }
}

PreviewModal.propTypes = {
  modalIsOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
  type: React.PropTypes.string,
  object: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  contentLabel: React.PropTypes.string.isRequired
}

module.exports = PreviewModal
