import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LayoutPrincipal() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Renderiza a página atual (PáginaInicio, PáginaHabitos, etc.) */}
      <Footer />
    </div>
  )
}

export default LayoutPrincipal
