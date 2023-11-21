import React from "react";
import { useState } from 'react';
import {Card, Container, Row, Button}from 'react-bootstrap';
import toolsBackground from "../images/background.jpg";
// import {MDBCarousel, MDBCarouselItem, MDBCarouselCaption} from 'mdb-react-ui-kit';

function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }  
  window.addEventListener("scroll", reveal);

  const [fullSizeImage, setFullSizeImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const openImageModal = (imageUrl) => {
    setFullSizeImage(imageUrl);
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  };

  const closeImageModal = () => {
    setFullSizeImage(null);
  };

    const imageData = [
      {
        thumbnail: 'https://www.mrhandyman.com/us/en-us/mr-handyman/_assets/expert-tips/images/Local-blogs-images/mrh-blog-top-15-reasons-to-have-a-handyman-service-on-you2.webp',
        fullSize: 'https://www.mrhandyman.com/us/en-us/mr-handyman/_assets/expert-tips/images/Local-blogs-images/mrh-blog-top-15-reasons-to-have-a-handyman-service-on-you2.webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      {
        thumbnail: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        fullSize: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        alt: 'Boat on Calm Water',
      },
      // Add more image data objects here
    ];
  return (
    <div>
<section class="">
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{height: "700px", background: 'url(https://www.mrhandyman.com/us/en-us/mr-handyman/_assets/expert-tips/images/Local-blogs-images/mrh-blog-top-15-reasons-to-have-a-handyman-service-on-you2.webp)'}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 slideInLeft" style={{marginTop: '50px'}}>
          <h1 class="my-5 display-3 fw-bold ls-tight" style={{color: '#0077B6'}}>
          "Your Home, <br />
            <span style={{color: '#CAF0F8'}}>Our Expertise"</span> <br />
          </h1>          
          <Button
          className="float-right button-pop-out"
          style={{ backgroundColor: '#0077B6', borderColor: '#0077B6', color: '#CAF0F8', fontSize: '25px' }}
        >
          Call Us
        </Button>         
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="">
            <div class="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<center>
<Container id='services' className="slideInRight" style={{marginTop: '-220px'}}>
  <Row className="d-flex flex-wrap justify-content-center">
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
      <Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
  <Card.Header className="fa-solid fa-screwdriver py-5" style={{fontSize: '100px', backgroundColor: '#03045E', color: '#CAF0F8'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: ""}} className='mb-4'>Repairs</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
<Card.Header className="fa-solid fa-paint-roller py-5" style={{fontSize: '100px', backgroundColor: '#03045E', color: '#CAF0F8'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: ""}} className='mb-4'>Painting</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
<Card.Header className="fa-solid fa-wrench py-5" style={{fontSize: '100px', backgroundColor: '#03045E', color: '#CAF0F8'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: ""}} className='mb-4'>Plumbing</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
<Card.Header className="fa-solid fa-plug py-5" style={{fontSize: '100px', backgroundColor: '#03045E', color: '#CAF0F8'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: ""}} className='mb-4'>Electric</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
    </Row>
  </Container>
  </center>
  <h1 className="reveal mb-5" id="gallery">Gallery</h1>
  <div className="row mx-5">
      {imageData.map((image, index) => (
        <div key={index} className="col-6 col-lg-3 col-md-6 mb-4 mb-lg-0 reveal button-pop-out">
          <img
            src={image.thumbnail}
            className="w-100 shadow-1-strong rounded mb-4"
            alt={image.alt}
            onClick={() => openImageModal(image.fullSize)}
          />
        </div>
      ))}

      {fullSizeImage && (
        <div className="modal-backdrop fade show" onClick={closeImageModal}></div>
      )}
      <div className={`modal fade ${fullSizeImage ? 'show' : ''}`} style={{ display: fullSizeImage ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: imageDimensions.width }}>
          <div className="modal-content">
            <div className="modal-header custom-close-button">
              <button type="button" className="btn-close" style={{ border: 'none' }} onClick={closeImageModal} />
            </div>
            <div className="modal-body">
              <img src={fullSizeImage} className="w-100" alt={fullSizeImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
<div class="container" id="pricing">
  <section class="text-center mt-5">
    <h4 class="mb-4 reveal"><strong>Pricing</strong></h4>
    <div class="row gx-lg-5">
      <div class="col-lg-3 col-md-6 mb-4 reveal">
        <div class="card" style={{borderColor: '#03045E'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>General Repairs</strong></p>
            <h5 class="mb-0">$75 show up fee + $100/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>        
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 reveal">
        <div class="card" style={{borderColor: '#03045E'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>Painting</strong></p>
            <h5 class="mb-0">$75 show up fee + $80/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 reveal">
        <div class="card" style={{borderColor: '#03045E'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>Plumbing</strong></p>
            <h5 class="mb-0">$75 show up fee + $120/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 reveal">
        <div class="card" style={{borderColor: '#03045E'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>Electric</strong></p>
            <h5 class="mb-0">$75 show up fee + $150/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<section class="text-center" id='aboutus'>
  <div class="p-5 bg-image" style={{
        backgroundImage: 'url(' + toolsBackground + ')',
        height: "300px",
        marginBottom: "-150px"}}></div>
  <div class="row">
    <div class="col-md-6 reveal">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '800px',
          height: '420px'}}>
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">About Us</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 reveal">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '800px',
          height: '420px'
          }}>
                <div class="">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
            </div>
            <h4 class="mb-2">John P. Smith</h4>
            <p class="text-muted mb-4">Owner <span class="mx-2">|</span>
                Handyman Template</p>
            <center>
            <button type="button" class="btn btn-rounded btn-lg button-pop-out" style={{maxWidth: '200px', backgroundColor: '#0077B6', color: '#CAF0F8'}}>
              Contact Us
            </button>
            </center>
            <div class="d-flex justify-content-between text-center mt-5 mb-2 mx-5">
              <div>
                <p class="mb-2 h5">30+</p>
                <p class="text-muted mb-0">Years Experience</p>
              </div>
              <div class="px-3">
                <p class="mb-2 h5">8512</p>
                <p class="text-muted mb-0">Income amounts</p>
              </div>
              <div>
                <p class="mb-2 h5">4751</p>
                <p class="text-muted mb-0">Total Transactions</p>
              </div>
            </div>
      </div>
    </div>
  </div>
</section>
</div>    
  );
}

export default Home;
