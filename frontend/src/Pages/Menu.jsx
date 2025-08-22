import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { data } from '../restApi.json'
import { StoreContext } from '../context/StoreContext'
import HeroSection from '../components/HeroSection'

const Menu = () => {
  const [category, setCategory] = useState("All");
  
  // Get dishes from your JSON data
  const dishes = data[0].dishes || [];
  
  // Get unique categories from dishes
  const categories = [...new Set(dishes.map(dish => dish.category))];
  
  // Filter dishes based on selected category
  const filteredDishes = category === "All" ? dishes : dishes.filter(dish => dish.category === category);

  // Function to generate random price for demo
  const getRandomPrice = () => {
    return Math.floor(Math.random() * 20) + 10;
  };

  // Function to generate random rating for demo
  const getRandomRating = () => {
    return (Math.random() * 2 + 3).toFixed(1);
  };

  return (
    <>
      <Navbar />
     

      <section className='menu-section' id='menu'>
        <div className="menu-container">
          <div className="menu-header">
            <h1 className="menu-title">POPULAR DISHES</h1>
          </div>
          
          {/* Category Filter */}
          <div className='category-filter'>
            <button 
              onClick={() => setCategory("All")} 
              className={`category-btn ${category === "All" ? "active" : ""}`}
            >
              All
            </button>
            {categories.map((cat, index) => (
              <button 
                key={index}
                onClick={() => setCategory(cat)} 
                className={`category-btn ${category === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Dishes Grid */}
          <div className='dishes-grid'>
            {filteredDishes.map((dish) => (
              <div key={dish.id} className='dish-card'>
                <div className='dish-image-container'>
                  <img src={dish.image} alt={dish.title} className='dish-image' />
                  <button className='add-btn'>+</button>
                </div>
                <div className='dish-info'>
                  <h3 className='dish-title'>{dish.title}</h3>
                  <div className='dish-rating'>
                    <div className='stars'>
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className='star filled'>★</span>
                      ))}
                      <span className='star'>★</span>
                    </div>
                  </div>
                  <p className='dish-description'>
                    Food provides essential nutrients for overall health and well-being
                  </p>
                  <div className='dish-price'>${getRandomPrice()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .menu-section {
          padding: 80px 20px 40px;
          
          min-height: 100vh;
          
          
        }

        .menu-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .menu-header {
          margin-bottom: 40px;
        }

        .menu-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .category-filter {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .category-btn {
          padding: 12px 24px;
          border: 2px solid #e0e0e0;
          background: white;
          color: #666;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .category-btn:hover {
          border-color: #C75B7A;
          color: #C75B7A;
        }

        .category-btn.active {
          background: #C75B7A;
          border-color: #C75B7A;
          color: white;
        }

        .dishes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .dish-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dish-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .dish-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .dish-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .dish-card:hover .dish-image {
          transform: scale(1.05);
        }

        .add-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: none;
          font-size: 24px;
          font-weight: 300;
          color: #C75B7A;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .add-btn:hover {
          background: #C75B7A;
          color: white;
          transform: scale(1.1);
        }

        .dish-info {
          padding: 20px;
        }

        .dish-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
          text-transform: capitalize;
        }

        .dish-rating {
          margin-bottom: 12px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .star {
          color: #ddd;
          font-size: 16px;
        }

        .star.filled {
          color: #C75B7A;
        }

        .dish-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.4;
          margin-bottom: 15px;
        }

        .dish-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: #C75B7A;
        }

        @media (max-width: 768px) {
          .menu-title {
            font-size: 2rem;
          }

          .dishes-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }

          .category-filter {
            justify-content: center;
          }

          .category-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  )
}

export default Menu