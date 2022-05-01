import React from "react";
import Table from "../components/table/Table";
import "../assets/css/import.css";
import shoe1 from "../assets/images/shoe1.png";
import shoe2 from "../assets/images/shoe2.png";
import shoe3 from "../assets/images/shoe3.png";
import shoe4 from "../assets/images/shoe4.png";
import shoe5 from "../assets/images/shoe5.png";
import shoe6 from "../assets/images/shoe6.png";
import shoe7 from "../assets/images/shoe7.png";
import shoe8 from "../assets/images/shoe8.png";
import shoe9 from "../assets/images/shoe9.png";
import shoe10 from "../assets/images/shoe10.png";

const Import = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card__body">
            <div className="row__left">
              <div className="row__left__1">
                <img src={shoe1} alt="" />
                <img src={shoe2} alt="" />
                <img src={shoe3} alt="" />
                <img src={shoe5} alt="" />
              </div>
              <div className="row__left__2">
                <img src={shoe5} alt="" />
                <img src={shoe6} alt="" />
                <img src={shoe7} alt="" />
                <img src={shoe8} alt="" />
               
              </div>
            </div>


            <div className="row__right">
              <div className="row__right__1"  >
                <h1>Nike Blazer Low '77</h1>
                <h3>Men's Shoe</h3>
              </div>
              <div className="row__right__2">
                <h2>160$</h2>
              </div>
              <div className="row__right__3">
                <div >
                    <img src={shoe9} alt="" />
                    <img src={shoe10} alt="" />    
                </div>
              </div>
              <div className="row__right__4">
                  <h2>Select size</h2>                  
              </div>
              <div className="row__right__5">
                <div className="selec__size1">
                    <div>US 35.5</div>
                    <div>US 37</div>
                    <div>US 39</div>
                    <div>US 41</div>
                </div>
                <div className="selec__size2"> 
                    <div>US 36</div>
                    <div>US 38</div>
                    <div>US 40</div>
                    <div>US 42</div>
                </div>
                <div className="selec__size3">
                    <div>US 36.5</div>
                    <div>US 38.5</div>
                    <div>US 39</div>
                    
                </div>
              </div>
              <div className="row__right__6">
                  <button className="btn btn-add">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Import;
