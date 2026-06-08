import React, { Component } from 'react';
import { FaExclamationTriangle, FaSync } from 'react-icons/fa';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log error details to state for display
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Optionally reload the page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen bg-bg text-textCol flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <FaExclamationTriangle className="text-red-500 text-3xl" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-textCol mb-3">
              Oops! Something went wrong
            </h1>
            <p className="text-textCol2 text-sm mb-8 leading-relaxed">
              An unexpected error occurred. Don't worry, this isn't your fault. 
              You can try refreshing the page or go back to the home page.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-8 text-left">
                <summary className="cursor-pointer text-accent text-sm font-bold mb-3 hover:underline">
                  View Error Details (Development Only)
                </summary>
                <div className="bg-bg2 border border-borderCol rounded-lg p-4 overflow-auto max-h-60">
                  <p className="text-red-400 text-xs font-mono mb-2">
                    {this.state.error && this.state.error.toString()}
                  </p>
                  <pre className="text-textCol3 text-[10px] font-mono whitespace-pre-wrap">
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 bg-grad text-white font-bold text-sm py-3 px-7 rounded-[30px] hover:shadow-lg transition-all duration-200"
              >
                <FaSync size={14} />
                Refresh Page
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-glass2 text-textCol border border-borderCol2 font-bold text-sm py-3 px-7 rounded-[30px] hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
              >
                Go to Home
              </a>
            </div>

            {/* Contact Support */}
            <p className="text-textCol3 text-xs mt-8">
              If this problem persists, please{' '}
              <a href="mailto:prateekyadav12203@gmail.com" className="text-accent hover:underline">
                contact me
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
