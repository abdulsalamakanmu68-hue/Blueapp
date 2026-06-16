import React from 'react'
// import XfinityLogin from '../component/xfinity';
import BellAliantLogin from "../component/blueapp";


// import Effect from '..Pages/Effect';

const Home = () => {
  return (
    <div>
      <section className="selection:bg-red-600 selection:text-red">
      {/* <XfinityLogin /> */}
     <BellAliantLogin />

    </section>
    </div>
  )
}

export default Home