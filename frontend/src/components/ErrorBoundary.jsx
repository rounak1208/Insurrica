import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="w-16 h-16 bg-[#FEF2F2] rounded-2xl flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8 text-[#EF4444]" />
            </div>
            <div className="space-y-2">
              <h2
                className="text-2xl font-bold text-[#1A1A4E]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Something went wrong
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.location.reload()}
                className="bg-[#0088CC] hover:bg-[#0088CC]/90 text-white rounded-full px-6 h-10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </Button>
              <Button
                onClick={this.handleReset}
                variant="outline"
                className="rounded-full px-6 h-10 border-gray-200"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
