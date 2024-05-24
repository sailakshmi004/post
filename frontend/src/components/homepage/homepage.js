import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage=()=>{
    const nav=useNavigate()
    const MainLogReg=()=>{
        nav('/register')

    }
    const About=()=>{
        
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            
            <img src={`${process.env.PUBLIC_URL}/content-writing.png`} style={{width:'2.5%'}} alt="Content Writing" />



            <a classNameName="navbar-brand" >CMS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link " >About</a>
        </li>
        
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
        </a>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
        
    </ul>
        <button style={{marginRight:'4.5%'}}onClick={MainLogReg}className="btn btn-outline-primary" type="submit">Login/Register</button>
    </div>
    
</div>
</nav>

<div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src={`${process.env.PUBLIC_URL}/fourth.jpg`} alt="" width="72" height="57"></img>
    <h1 class="display-5 fw-bold text-body-emphasis">What is CMS?</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">A Content Management System (CMS) is a versatile tool that enables users to easily manage website content. With a CMS, you can create, update, and delete articles, ensuring that your website always features the most current and relevant information.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        
      </div>
    </div>
  </div>



<div className="container-sm">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/first.jpg`} className="d-block w-100 img-fluid" style={{height:'80vh'}} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/second.jpeg`} className="d-block w-100 img-fluid" style={{ height:'80vh' }} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/third.jpg`} className="d-block w-100 img-fluid" style={{ height:'80vh' }} alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    



      <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
        </>
    );


}
export default HomePage;