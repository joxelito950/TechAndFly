import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      type: 'bars',
      color: '#ffff00',
      delay: 0
    };
  }

  componentWillReceiveProps(props) {
    /*eslint-disable */
    this.setState({ open: props.open });
  }

  closeModal = () => {
    /*eslint-disable */
    this.setState({ open: false });
    this.props.onClose();
  };

  render() {
    const props = this.props;
    return (
      <div
        key={`loading${props.key}`}
        className="bg-modal fade"
        style={{ display: `${this.state.open ? 'block' : 'none'}`, opacity: 1 }}
      >
        <div className="loading-center">
          <ReactLoading {...this.state} {...props} />
        </div>
      </div>
    );
  }
}

export default Loading;
