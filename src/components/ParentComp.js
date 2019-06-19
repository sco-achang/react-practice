import React, { Component } from 'react';
import RegComp from './RegComp'
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Albert'
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({name: 'Albert'});
    }, 2000)
  }

  render() {
    const { name } = this.state;
    console.log('************** Parent Comp Render **************');
    return (
      <div>
        Parent Component
        <MemoComp name={name} />
        {/* <RegComp name={name} />
        <PureComp name={name} /> */}
      </div>
    )
  }
}

export default ParentComp
