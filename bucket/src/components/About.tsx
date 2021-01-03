// Imports
// React Imports
import React, { useRef } from 'react';
// Images Imports
import adidas from '../asserts/images/adidas.png';

// App Function
function About() {
    // Define useRef variables
    const card: any = useRef(null);
    const sneaker: any = useRef(null);
    const title: any = useRef(null);
    const sizes: any = useRef(null);
    const purchase: any = useRef(null);
    // Function for moving animation when curser moving on the container
    function moveAnimations(e: React.MouseEvent) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
        card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    // Function for moving animation when curser moving into the container
    function animateIn(e: React.MouseEvent) {
        card.current.style.transition = "none";
        sneaker.current.style.transform = "translateZ(200px) rotateZ(-45deg)";
        title.current.style.transform = "translateZ(150px)";
        sizes.current.style.transform = "translateZ(100px)";
        purchase.current.style.transform = "translateZ(75px)";
    }
    // Function for moving animation when curser moving out of the container
    function animateOut(e: React.MouseEvent) {
        card.current.style.transition = "all 2s ease";
        card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        sneaker.current.style.transform = "translateZ(0px) rotateZ(0deg)";
        title.current.style.transform = "translateZ(0px)";
        sizes.current.style.transform = "translateZ(0px)";
        purchase.current.style.transform = "translateZ(0px)";
    }
    //   What to Display on the page
    return (
        <div className="about">
            {/* // Div for enclosing the complete page */}
            <div className="containerAbout"
                onMouseMove={(e) => { moveAnimations(e) }}
                onMouseEnter={(e) => { animateIn(e) }}
                onMouseLeave={(e) => { animateOut(e) }}
            >
                {/* Div for card (actual content of the page) */}
                <div ref={card} className="cardAbout">
                    {/* Div For Displaying Sneeker */}
                    <div className="sneakerAbout">
                        {/* A circle in the background of the sneaker */}
                        <div className="circleAbout"></div>
                        {/* Sneakers image */}
                        <img ref={sneaker} src={adidas} alt="adidas" />
                    </div>
                    {/* div for info of the sneakers */}
                    <div className="infoAbout">
                        {/* Title or name of the item */}
                        <h1 ref={title} className="title">Shoe Store</h1>
                        {/* Div for displaying different buttons showing different sizes */}
                        <div ref={sizes} className="sizesAbout">
                            <button>Comfortable</button>
                            <button>Affordable</button>
                            <button>Durable</button>
                        </div>
                        {/* Div for purchase button */}
                        <div ref={purchase} className="purchaseAbout">
                            <button>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;