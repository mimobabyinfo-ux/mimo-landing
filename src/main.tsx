import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initWhatsAppClickTracking } from './lib/track'
import { captureAttribution, initOutboundAttribution } from './lib/attribution'

// Snapshot utm_* / fbclid before anything can navigate away from the ad URL.
captureAttribution()

// Carry that snapshot onto every link that leaves for the app
// (mimo-baby.co.il), so registrations and purchases keep their ad identity.
initOutboundAttribution()

// Fire the Meta pixel custom event "whatsapp_click" for every wa.me link on the page.
initWhatsAppClickTracking()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
