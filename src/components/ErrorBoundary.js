import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  // to log errors
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    // THIS SHOWS ONLY IN 'PROD' NOT in 'DEV' mode
    // Display Fallback UI
    if (hasError) return <h1>Something went wrong</h1>
    return children;
  }
}

export default ErrorBoundary
