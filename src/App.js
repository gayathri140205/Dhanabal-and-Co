import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure to include this for Bootstrap JS to work

function App() {
  return (
    <div>
    <div>
  {/* Header Section */}
  <header style={{ backgroundColor: '#004080', color: '#fff', textAlign: 'center', padding: '1rem 0', marginBottom: '20px' }}>
    <img src="/assets/images/img1.jpg" alt="Dhanabal and Co Logo" style={{ width: '150px' }} />
    <h1>Dhanabal and Co</h1>
    <p>Engineers and Builders | Building Dreams with Excellence</p>
  </header>

  {/* Navbar Section */}
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1B7593', padding: '20px 0' }}>
    <div className="container-fluid">
     <h2><a className="navbar-brand" href="/">Dhanabal and Co</a></h2> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
  
      <ul className="navbar-nav ms-auto" style={{ justifyContent: 'center', width: '100%' }}>
  <li className="nav-item">
    <h2 style={{ marginLeft: '450px' }}><a className="nav-link" href="#about">About Us</a></h2>
  </li>
  <li className="nav-item">
    <h2 style={{ marginLeft: '100px' }}><a className="nav-link" href="#services">Services</a></h2>
  </li> 
  <li className="nav-item">
    <h2 style={{ marginLeft: '50px' }}><a className="nav-link" href="#contact">Contact</a></h2>
  </li>
</ul>

      </div>
    </div>
  </nav>
</div>




{/* Carousel Section in Card */}
<section className="mt-4" style={{ padding: '40px 0' }}>
  <div id="carouselCard" className="container" style={{
    backgroundColor: '#ADD8E6',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }}>
    <h2 style={{ color: '#1B7593' }}>Our Projects</h2>
    <div id="buildingCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src="/assets/images/img8.jpg" 
            className="d-block w-100 img-fluid" 
            alt="Building exterior with modern architecture" 
            style={{ padding: '20px', margin: '0 auto', maxWidth: '80%' }} 
          />
        </div>
        <div className="carousel-item">
          <img 
            src="/assets/images/img9.jpg" 
            className="d-block w-100 img-fluid" 
            alt="Construction site in progress" 
            style={{ padding: '20px', margin: '0 auto', maxWidth: '80%' }} 
          />
        </div>
        <div className="carousel-item">
          <img 
            src="/assets/images/img4.jpg" 
            className="d-block w-100 img-fluid" 
            alt="Completed residential building" 
            style={{ padding: '20px', margin: '0 auto', maxWidth: '80%' }} 
          />
        </div>
        <div className="carousel-item">
          <img 
            src="/assets/images/img11.jpg" 
            className="d-block w-100 img-fluid" 
            alt="Completed residential building" 
            style={{ padding: '20px', margin: '0 auto', maxWidth: '80%' }} 
          />
        </div>
        <div className="carousel-item">
          <img 
            src="/assets/images/img13.jpg" 
            className="d-block w-100 img-fluid" 
            alt="Completed residential building" 
            style={{ padding: '20px', margin: '0 auto', maxWidth: '80%' }} 
          />
        
        </div>
      </div>
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#buildingCarousel" 
        data-bs-slide="prev"
        style={{ position: 'absolute', top: '50%', left: '0', zIndex: '1' }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#buildingCarousel" 
        data-bs-slide="next"
        style={{ position: 'absolute', top: '50%', right: '0', zIndex: '1' }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>





{/* About Section */}
<section className="mt-4" style={{ backgroundColor: '', padding: '40px 0' }}>
  <div id="about" className="container" style={{ backgroundColor: '#ADD8E6', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)','textAlign':'center' }}>
    <h2 style={{ color: '#1B7593' }}>About Us</h2>
    <img 
      src="/assets/images/img15.png" 
      className="d-block img-fluid" 
      alt="Construction site in progress" 
      style={{ maxWidth: '750px', padding: '20px', height:'650px',margin: '0 auto', display: 'block' }} 
    />
  <h3 style={{ paddingTop: '20px', color: '#1B7593' }}>
  Dhanabal & Co, having been around for more than 10 years in the Coimbatore Realty business, has built a deep connection with the people of Coimbatore that are guaranteed to last a lifetime. Dhanabal & Co has imbued in Coimbatore culture.
</h3></div>
</section>
{/* Services Section */}
<section className="mt-4" style={{ backgroundColor: '', padding: '40px 0' }}>
  <div id="services" className="container" style={{
    backgroundColor: '#ADD8E6', 
    padding: '20px', 
    borderRadius: '8px', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }}>
    <h2 style={{ color: '#1B7593' }}>Our Services</h2>
    
    {/* 2x2 Grid of Images */}
    <div className="row" style={{
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '15px'
    }}>
      <div className="col">
        <img 
          src="/assets/images/img20.png" 
          className="d-block img-fluid" 
          alt="Service 1" 
          style={{ width: '100%', height: '450px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} 
        />
      </div>
      <div className="col">
        <img 
          src="/assets/images/img17.png" 
          className="d-block img-fluid" 
          alt="Service 2" 
          style={{ width: '100%', height: '450px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} 
        />
      </div>
      <div className="col">
        <img 
          src="/assets/images/img18.png" 
          className="d-block img-fluid" 
          alt="Service 3" 
          style={{ width: '100%', height: '450px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} 
        />
      </div>
      <div className="col">
        <img 
          src="/assets/images/img19.png" 
          className="d-block img-fluid" 
          alt="Service 4" 
          style={{ width: '100%', height: '450px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} 
        />
      </div>
    </div>

{/* Service Descriptions as h3 */}
<h3 style={{ paddingTop: '20px', color: '#1B7593' }}>✔ Residential Construction</h3>
    <h3 style={{ paddingTop: '10px', color: '#1B7593' }}>✔ Commercial Construction</h3>
    <h3 style={{ paddingTop: '10px', color: '#1B7593' }}>✔ Renovation and Remodeling</h3>
    <h3 style={{ paddingTop: '10px', color: '#1B7593' }}>✔ Structural Engineering</h3>
  </div>
</section>


{/* Contact Section */}
<section className="mt-4" style={{ backgroundColor: '', padding: '40px 0' }}>
  <div id="contact" className="container" style={{ backgroundColor: '#ADD8E6', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' ,'textAlign':'center'}}>
    <h2 style={{ color: '#1B7593' }}>Contact Us</h2>
    <img 
      src="/assets/images/img22.jpg" 
      className="d-block img-fluid" 
      alt="Contact details" 
      style={{ maxWidth: '70%', padding: '20px', margin: '0 auto', display: 'block' }} 
    />
 <h3 style={{ paddingTop: '20px', color: '#1B7593' }}>📍 Address: 36, Marudham Nagar, Saravanampatti, Coimbatore</h3>
<h3 style={{ paddingTop: '10px', color: '#1B7593' }}>📞 Phone: +91-9843353335</h3>
<h3 style={{ paddingTop: '10px', color: '#1B7593' }}>📧 Email: dhanabalan.engg@gmail.com</h3>

  </div>
</section>

{/* Footer Section */}
<footer style={{ backgroundColor: '#004080', color: '#fff', textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
  <p>&copy; 2024 Dhanabal and Co Engineers and Builders. All Rights Reserved.</p>
</footer>
    </div>
  );
}

export default App;