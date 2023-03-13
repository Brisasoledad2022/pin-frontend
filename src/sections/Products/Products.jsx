import image4 from"../../assets/cocktail2.jpg";
import image5 from"../../assets/weeding.jpg";
import image6 from"../../assets/brunch7.jpg";


function Products(){
    return(
        <div id="Products">
        <h2>Products</h2>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image4} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Cocktails</h5>
        <p>Try and enjouy our best selection in fine cocktail making.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image6} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Brunch Service</h5>
        <p>Enjoy our luxurious brunchs with the best ingredients.</p>
      </div>
    </div>
    <div className="carousel-item2">
      <img src={image5} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wedding receptions</h5>
        <p>Let the Bloom take charge your wedding reception and just relax</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
};
export default Products