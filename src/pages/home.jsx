import React from 'react'

const SOURCE = 'https://infinityschool.com.br/wp-content/uploads'

const Carousel = () => {
  const BANNERS = [
    { title: '', url: '/2018/03/banner-digital-design2.jpg' },
    { title: '', url: '/2019/04/meta_banner.jpg' },
    { title: '', url: '/2021/09/banner_fullstack.jpg' },
    { title: '', url: '/2021/09/banner_marketing_digital.jpg' },

  ]
  return (
    <div id='carousel' className='carousel slide' data-bs-ride="true">
      <div className='carousel-indicators'>
        {BANNERS.map((el, ix) =>
          <button
            key={ix}
            type='button'
            data-bs-target='#carousel'
            data-bs-slide-to={ix}
            aria-label={el.title}
            className={ix === 0 ? 'active' : ''}
            aria-current={ix === 0 ? 'true' : ''} />
        )}
      </div>
      <div className='carousel-inner'>
        {BANNERS.map((el, ix) =>
          <div key={ix} className={`carousel-item ${ix === 0 ? 'active' : ''}`}>
            <img
              src={SOURCE.concat(el.url)}
              className='d-block w-100 img-responsive'
              alt={el.title}
              title={el.title}
              style={{ height: '80vh' }}
            />
          </div>
        )}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carousel' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Anterior</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carousel' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Próxima</span>
      </button>
    </div>
  )
}

const Courses = () => {
  const IMAGES = [
    { name: 'Design Full Stack', url: '/2022/03/icon-data_science-300x300.png' },
    { name: 'Art Design', url: '/2018/02/art-design-thumb-299x300.jpg' },
    { name: 'Film Design', url: '/2021/12/meta_squared_improved.jpg' },
    { name: 'Fotografia Design', url: '/2018/06/curso-photography-thumb.jpg' },
  ]
  return (
    <section className='container py-5'>
      <div className='row'>
        <h1 className='my-3'>Conheça nossos cursos presenciais</h1>
        {IMAGES.map((el, ix) =>
          <div key={ix} className='col-sm-3'>
            <div className='card shadow'>
              <img src={SOURCE.concat(el.url)} title={el.name} alt={el.name} className='card-img-top' />
              <div className='card-body'>
              </div>
            </div>
          </div>
        )}
      </div>


    </section>
  )
}

const Home = () => {

  return (
    <React.Fragment>
      <Carousel />
      <Courses />
    </React.Fragment>
  )
}

export default Home