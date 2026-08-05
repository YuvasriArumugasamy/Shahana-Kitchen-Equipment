import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-white rounded-2xl border border-rose-100 shadow-md space-y-4 max-w-md mx-auto my-12">
          <h2 className="text-lg font-heading font-black text-rose-600">Something went wrong</h2>
          <p className="text-xs text-slate-600">An unexpected error occurred while loading this section.</p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              if (this.props.onReset) this.props.onReset();
              window.location.reload();
            }}
            className="px-4 py-2 bg-[#6A1B9A] text-white text-xs font-bold rounded-xl"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
