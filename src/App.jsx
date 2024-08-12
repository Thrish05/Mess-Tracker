import Vote from './components/Vote.jsx'
import Result from './components/Result.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <div>
          <BrowserRouter>
            <Routes>
                <Route index element = {<Vote />} />
                <Route path = '/vote' element = {<Vote />} />
                <Route path = '/result' element = {<Result />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
}

{/* <Navbar></Navbar>
       <Header></Header> }
      <div className = "MAIN">
        <div className = "carousel">
          <Slider {...settings}>
          {foodData.map((d) => (
            <div className = "singleCard">
              <div className = "top ">
                <img className = "imageHolder" src = {d.img}/>
              </div>
              <div className = "bottom">
                <p>{d.name}</p>
                <button onclick = "">Choose</button>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div> */}
        // <Carousel activeIndex={index} onSelect={handleSelect}>
        //   <Carousel.Item>
        //     <ExampleCarouselImage text="First slide" />
        //     <Carousel.Caption>
        //       <h3>First slide label</h3>
        //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <ExampleCarouselImage text="Second slide" />
        //     <Carousel.Caption>
        //       <h3>Second slide label</h3>
        //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <ExampleCarouselImage text="Third slide" />
        //     <Carousel.Caption>
        //       <h3>Third slide label</h3>
        //       <p>
        //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel>
        // const foodData = [
        //   {
        //     name: "Sambar Rice",
        //     img: "./src/assets/Images/VEG/sambar_rice.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   },
        //   {
        //     name: "Curd Rice",
        //     img: "./src/assets/Images/VEG/curd_rice.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   },
        //   {
        //     name: "Veg Fried Rice",
        //     img: "./src/assets/Images/VEG/veg_rice.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   },

        //   {
        //     name: "Veg Noodles",
        //     img: "./src/assets/Images/VEG/veg_noodles.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   },
        //   {
        //     name: "Poori and Masala",
        //     img: "./src/assets/Images/VEG/poori.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   },
        //   {
        //     name: "Dosa and Chutney",
        //     img: "./src/assets/Images/VEG/dosa.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   },
        //   {
        //     name: "Idly and Chutney",
        //     img: "./src/assets/Images/VEG/idly.jpg",
        //     desc: "Jeera rice slowcooked and sauteed with fresh vegetables, made fresh"
        //   }

        // ]

export default App
