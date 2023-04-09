import image1 from"../../assets/bar1.jpg"
import image2 from"../../assets/bar2.jpeg"

import image3 from"../../assets/bar007.jpeg"




function Home(){
    return(
      <div className="">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div style={{zIndex:9999}} className="w-100 position-absolute top-0 bg-transparent header-buttons">
            <Navbar/>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}

                className="d-block w-100 img-carousel"


                alt="bar entry"

              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}

                className="d-block w-100 img-carousel"

                alt="bar entry different view"

              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}

                className="d-block w-100 img-carousel"


                alt=" bar entry different view front"

              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        
    )
};
export default Home