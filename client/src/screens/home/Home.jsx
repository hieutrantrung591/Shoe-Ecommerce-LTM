import React from 'react';
import image_1 from '../../assets/image/home/home-1.png';
import image_2 from '../../assets/image/home/home-2.png';
import image_3 from '../../assets/image/home/home-3.png';
import image_4 from '../../assets/image/home/home-4.png';
import image_5 from '../../assets/image/home/home-5.png';
import image_6 from '../../assets/image/home/home-6.png';

const Home = () => {
  return (
    <div className="flex-grow-1">
      <div className="py-3 text-center bg-light">
        <h3>SALE UP TO 40%</h3>
        <span>Shop all the items</span>
      </div>
      <div>
        <img src={image_1} className="w-100" alt="home 1" />
      </div>
      <div>
        <img src={image_2} className="w-100" alt="home 2" />
      </div>
      <div>
        <img src={image_3} className="w-100" alt="home 3" />
      </div>
      <div className="container">
        <h3>TRENDING</h3>
        <div className="row">
          <div className="col-6">
            <img src={image_4} alt="home 4" />
          </div>
          <div className="col-6">
            <img src={image_5} alt="home 5" />
          </div>
        </div>
      </div>
      <div>
        <img src={image_6} className="w-100" alt="home 6" />
      </div>
    </div>
  )
}

export default Home