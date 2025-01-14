import horse from '../assets/foto/tulporcha.png'

export default function banner() {
  return (
  
   <div className="container ">
     <div className="row">
      <div className="col-md-6 align-atims-center">
          <h1 className='mb-5'>Окунитесь в мир 
          лошадей вместе с нами</h1>
          <p className='mb-5'>Уроки верховой езды, фотосессии и мероприятия
          в частном конном клубе г. Санкт-Петербург</p>
          <button className="btn  py-3 px-5 btn-warning">записаться</button>
      </div>
      <div className='col-md-6 horse-img'><img src={horse} alt="" /></div>
    </div>
   </div>
  
  )
}
