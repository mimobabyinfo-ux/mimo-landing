import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initWhatsAppClickTracking } from './lib/track'

// Fire the Meta pixel custom event "whatsapp_click" for every w