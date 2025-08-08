// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages'
import './assets/styles/index.less'
import 'virtual:uno.css'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
  // </StrictMode>,
)
