import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://mlmzztreenbr.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://jeanmarcfray.com/wp-content/uploads/2023/05/image_6.jpg"
              class="d-block w-100"
              alt="No Image"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://mlmzztreenbr.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://jeanmarcfray.com/wp-content/uploads/2023/05/image_1.jpg"
              class="d-block w-100"
              alt="No Image"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://mlmzztreenbr.i.optimole.com/w:auto/h:auto/q:mauto/f:avif/https://jeanmarcfray.com/wp-content/uploads/2023/05/image_2.jpg"
              class="d-block w-100"
              alt="No Image"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
