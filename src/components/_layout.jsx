import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from 'src/assets/logo.png'


const Header = () => {
  const LINKS = [
    { name: 'Home', url: '' },
    { name: 'Cursos', url: '' },
    { name: 'Benefícios', url: '' },
    { name: 'Unidades', url: '' },
    { name: 'A Escola', url: '' },
    { name: 'Contato', url: '' },
  ]

  return (
    <header className='site-header sticky-top py-1 bg-dark-2 shadow'>
      <div className='container'>
        <nav className='container d-flex flex-column flex-md-row align-items-center gap-2'>
          <Link className='mx-5' to='#' aria-label='Product'>
            <img src={logo} className='img-fluid' style={{ height: 60, width: 'auto' }} />
          </Link>
          {LINKS.map((el, ix) => <Link key={ix} className='d-none d-md-inline-block' to={el.url}>{el.name}</Link>)}
        </nav>
      </div>
    </header>
  )
}

const Footer = () => {
  const LINKS = [

  ]

  return (
    <footer className='py-5 bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <img src={logo} className='img-fluid' style={{ height: 120 }} />
            <p><small className='d-block mb-3'>&copy; Infinity {new Date().getFullYear()}</small></p>
            <p>
              Somos uma escola com metodologia americana, 100% presencial e prática, voltada à
              capacitação para o mercado de trabalho nas áreas criativas e de inovação. Formamos
              hoje as principais carreiras demandadas pelo mercado com uma experiência única de ensino.
            </p>
          </div>
          <div className='col-sm-2'>
            <h5>Features</h5>
            <ul className='list-unstyled text-small'>
              <li><Link to='#'>Cool stuff</Link></li>
              <li><Link to='#'>Random feature</Link></li>
              <li><Link to='#'>Team feature</Link></li>
              <li><Link to='#'>Stuff for developers</Link></li>
              <li><Link to='#'>Another one</Link></li>
              <li><Link to='#'>Last time</Link></li>
            </ul>
          </div>
          <div className='col-sm-2'>
            <h5>Resources</h5>
            <ul className='list-unstyled text-small'>
              <li><Link to='#'>Resource name</Link></li>
              <li><Link to='#'>Resource</Link></li>
              <li><Link to='#'>Another resource</Link></li>
              <li><Link to='#'>Final resource</Link></li>
            </ul>
          </div>
          <div className='col-sm-2'>
            <h5>Resources</h5>
            <ul className='list-unstyled text-small'>
              <li><Link to='#'>Business</Link></li>
              <li><Link to='#'>Education</Link></li>
              <li><Link to='#'>Government</Link></li>
              <li><Link to='#'>Gaming</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export { Layout }
export default Layout