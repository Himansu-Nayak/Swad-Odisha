import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartContext";

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ backgroundColor: 'black', color: 'red', padding: '50px', fontFamily: 'monospace' }}>
          <h1>CRITICAL SYSTEM ERROR</h1>
          <pre>{this.state.error?.message}</pre>
          <button onClick={() => window.location.reload()}>REBOOT_SYSTEM</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <CartProvider>
      <App />
    </CartProvider>
  </ErrorBoundary>
);
