import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5  " id="supportWrappera">
        <div className="col-6 p-5 ">
          <h1 className="fs-4 mb-5" >
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is  my order getting rejected ... " style={{fontSize:"15px"}}   /><br/>
          <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Kite user manual </a>
        </div>
        <div className="col-6 p-5 " >
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">
                Surveillance measure on scrips - June 2025
              </a>
              
            </li>
           
            <li>
              <a href="">Rights Entitlements listing in June 2025 </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
