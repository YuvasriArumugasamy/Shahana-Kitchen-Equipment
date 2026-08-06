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

  handleReset = () => {
    try {
      localStorage.removeItem('shahana_admin_products');
      localStorage.removeItem('shahana_admin_auth');
      localStorage.removeItem('shahana_notifications');
    } catch (e) {
      console.warn("Could not clear localStorage:", e);
    }
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) this.props.onReset();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-white rounded-2xl border border-rose-100 shadow-md space-y-4 max-w-md mx-auto my-12">
          <h2 className="text-lg font-heading font-black text-rose-600">Something went wrong</h2>
          <p className="text-xs text-slate-600">An unexpected error occurred while loading this section.</p>
          {this.state.error && (
            <p className="text-[11px] text-rose-500 bg-rose-50 p-2.5 rounded-xl break-words font-mono text-left max-h-32 overflow-y-auto">
              {String(this.state.error.message || this.state.error)}
            </p>
          )}
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-[#6A1B9A] hover:bg-[#5A1582] text-white text-xs font-bold rounded-xl shadow-md transition-all"
          >
            Reset Cache & Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
