import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// STEP 1 — Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ 
  duration: 1.4, 
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
});

gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>
);
