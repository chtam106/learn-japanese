import { Component, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorFallback } from '@/components/error-fallback';

type ErrorBoundaryClassProps = {
  children: ReactNode;
  resetKey: string;
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundaryClass extends Component<ErrorBoundaryClassProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  handleError = () => this.setState({ hasError: true });

  componentDidMount() {
    window.addEventListener('error', this.handleError);
    window.addEventListener('unhandledrejection', this.handleError);
  }

  componentWillUnmount() {
    window.removeEventListener('error', this.handleError);
    window.removeEventListener('unhandledrejection', this.handleError);
  }

  componentDidUpdate(prevProps: ErrorBoundaryClassProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

/** Clears a prior page error when the route changes without remounting the app tree. */
export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const location = useLocation();
  const resetKey = `${location.pathname}${location.search}`;

  return <ErrorBoundaryClass resetKey={resetKey}>{children}</ErrorBoundaryClass>;
}
