import React, { Component } from 'react';
class ErrorBoundary extends Component {
    state = {
        haError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasErro: true, errorMessage: error });
    }

    render() {
        if (this.state.hasErro) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;

