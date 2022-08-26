import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <div className="container py-4 ">
        <div className="p-5 mb-4 bg-light rounded-3 jumbotron-container demo-wrap">
          <div className="container-fluid py-5">
            <h1 className="display-5  fw-bold">Welcome to E-commerce</h1>
            <p className="col-md-8  fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              illum harum non sed iusto repellat maxime magnam nisi dolor sit,
              est voluptates sapiente dolorem dignissimos ipsum. Quis ipsa unde
              placeat?
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Shop Now
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>New Arrivals</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                provident doloremque maxime, esse sunt vero reiciendis
                architecto ipsa fugiat, optio ab distinctio explicabo tempora,
                eius nulla in. Vero, magnam eveniet.
              </p>
              <button className="btn btn-outline-light" type="button">
                Shop Now
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Best Sellers</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi odio illum quidem dolor ab consequatur eius voluptatem
                exercitationem, a, soluta natus, minus ut possimus unde atque.
                Qui accusantium eveniet quibusdam!
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
