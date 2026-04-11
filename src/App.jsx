import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Roadtrip2019 from './pages/Roadtrip2019.jsx'
import Roadtrip2021 from './pages/Roadtrip2021.jsx'
import Roadtrip2022 from './pages/Roadtrip2022.jsx'
import Roadtrip2023 from './pages/Roadtrip2023.jsx'
import Roadtrip2024 from './pages/Roadtrip2024.jsx'
import Roadtrip2025 from './pages/Roadtrip2025.jsx'
import CestovaniVeFrancii from './pages/CestovaniVeFrancii.jsx'
import Napisnam from './pages/Napisnam.jsx'
import PosliItinerar from './pages/PosliItinerar.jsx'
import './style.css'

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/roadtrips/2019" element={<Roadtrip2019 />} />
          <Route path="/roadtrips/2021" element={<Roadtrip2021 />} />
          <Route path="/roadtrips/2022" element={<Roadtrip2022 />} />
          <Route path="/roadtrips/2023" element={<Roadtrip2023 />} />
          <Route path="/roadtrips/2024" element={<Roadtrip2024 />} />
          <Route path="/roadtrips/2025" element={<Roadtrip2025 />} />
          <Route path="/cestovani" element={<CestovaniVeFrancii />} />
          <Route path="/napisnam" element={<Napisnam />} />
          <Route path="/posli-itinerar" element={<PosliItinerar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
