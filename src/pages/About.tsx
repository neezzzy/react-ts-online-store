import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="col-md-5 p-lg-5 mx-auto my-5 d-flex flex-column justify-content-center align-content-center text-center">
        <h1 className="display-4 fw-normal">Think Different</h1>
        <p className="lead fw-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <a className="btn btn-outline-secondary" href="#">
          Coming soon
        </a>
      </div>

      <div className="row featurette">
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <h2 className="featurette-heading fw-normal lh-1">
            Easy.
            <span className="text-muted"> Lorem ipsum, dolor sit.</span>
          </h2>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            voluptates, enim beatae nesciunt tempore obcaecati assumenda quod
            numquam quaerat totam, aliquid aspernatur officiis tempora
            dignissimos accusantium iure, repellendus voluptatibus? Possimus.
          </p>
        </div>
        <div className="col-md-5 img-container p-4">
          <img src="../../public/images/about-1.jpg"></img>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center">
          <h2 className="featurette-heading fw-normal lh-1">
            Oh yeah, it’s that good.
            <span className="text-muted"> Lorem ipsum.</span>
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            odit vitae quos veniam modi consectetur repudiandae laudantium
            repellendus vel quo sequi, adipisci accusantium ab, earum obcaecati
            iusto. Dolor, aperiam obcaecati.
          </p>
        </div>
        <div className="col-md-5  img-container ">
          <img className="p-4" src="../../public/images/about-2.jpg"></img>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <h2 className="featurette-heading fw-normal lh-1">
            And it is free. <span className="text-muted">Lorem ipsum.</span>
          </h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium quo explicabo quidem cum dignissimos, facilis nemo,
            totam qui, deleniti modi quos dolores quae atque iusto natus
            necessitatibus. Reiciendis, eius atque.
          </p>
        </div>
        <div className="col-md-5 img-container p-4">
          <img src="../../public/images/about-3.jpg"></img>
        </div>
      </div>
    </div>
  );
}
