import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
      <div className="home">
        <img className="home__image" src="/images/banner.jpg" alt="banner" />

        <div className="home__row">
          <Product
            id="12"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/1.jpg"
          />

          <Product
            id="123"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/2.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1234"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/3.jpg"
          />

          <Product
            id="12345"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/4.jpg"
          />

          <Product
            id="123456"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/5.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1234567"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/6.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1234"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/7.jpg"
          />

          <Product
            id="12345"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/8.jpg"
          />

          <Product
            id="123456"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/9.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450.0}
            rating={5}
            image="/images/10.jpg"
          />

          <Product
            id="123"
            title="Look African where ever you find yourself. Product of Northern Ghana"
            price={450}
            rating={5}
            image="/images/11.jpg"
          />
        </div>
      </div>
    );
}

export default Home
