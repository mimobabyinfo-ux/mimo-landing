import { currentPage } from './lib/router'
import HomePage from './pages/HomePage'
import CampaignPage from './pages/CampaignPage'
import CoursePage from './pages/CoursePage'

// Three entry points, one bundle. Each page sets its own tracking variant on
// mount, so every event knows which page it came from.
export default function App() {
  switch (currentPage()) {
    case 'lp':
      return <CampaignPage />
    case 'course':
      return <CoursePage />
    default:
      return <HomePage />
  }
}
