import React from "react";
import ErrorPage from "./ErrorPage";

interface IErrorBoundaryProps {
  fallback?: React.FC<any>;
  error?: Error;
  children?: any;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  info?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error, info });
  }

  componentDidMount() {
    if (this.props.error)
      this.setState({ hasError: true, error: this.props.error });
  }

  renderErrorComponent = (error?: Error) => {
    if (!this.props.fallback && !this.props.children)
      return <span>An unexpected error has occured</span>;

    const { fallback: FallBack = () => <ErrorPage /> } = this.props;

    return <FallBack error={error} />;
  };

  render() {
    const { hasError, error } = this.state;
    const { children, error: remixError } = this.props;

    return hasError || remixError ? this.renderErrorComponent(error) : children;
  }
}

export default ErrorBoundary;
