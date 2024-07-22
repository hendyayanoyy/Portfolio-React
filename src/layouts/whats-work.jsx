import React from 'react';

function WhatWork() {
  return (
    <div className="text-center">
      <div className="text-2xl mb-20">Whats I've worked</div>

      <div className="hero">
        <div className="hero-content flex flex-col items-center lg:flex-row lg:items-center">
          <div>
            <h1 className="text-xl font-bold pb-10">
              PPDB SMP Mitra Bintaro Islamic School
            </h1>
            <div className='flex justify-center '>
            <img
                src="./src/assets/images/school.png"
                className="max-w-sm rounded-lg shadow-2xl"
                alt=""
                />
                </div>
            <p className="py-6 text-justify">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.
            </p>
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWork;
