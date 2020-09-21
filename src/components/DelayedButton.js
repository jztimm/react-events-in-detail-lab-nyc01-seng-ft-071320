import React from 'react';

class DelayedButton extends React.Component {

   clickHandler=(e)=>{
      e.persist()
      window.setTimeout(()=>{
         this.props.onDelayedClick(e)
      }, this.props.delay)
   }

   render() {
      return <button onClick={this.clickHandler}>DelayedButton</button>
   }
}

export default DelayedButton
