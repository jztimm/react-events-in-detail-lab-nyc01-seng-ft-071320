import React from 'react';

class CoordinatesButton extends React.Component {

   clickHandler = (e) => {
      return this.props.onReceiveCoordinates([e.clientX, e.clientY])
   }

   render() {
      return <button onClick={this.clickHandler}>CoordinatesButton</button>
   }
}

export default CoordinatesButton
