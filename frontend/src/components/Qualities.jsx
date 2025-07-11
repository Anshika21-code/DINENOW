import React from 'react'
import {data} from '../restApi.json'

const Qualities = () => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '60px',
    alignItems: 'center'
  };

  const cardStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0'
  };

  const imageContainerStyle = {
    width: '180px',
    height: '180px',
    margin: '0 auto 30px',
    borderRadius: '50%',
    overflow: 'hidden',
    
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'Arial, sans-serif'
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '280px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  // Color scheme for each card
  const getCardColor = (index) => {
    const colors = ['#ff6b35', '#8b5cf6', '#10b981']; // Orange, Purple, Green
    return colors[index % colors.length];
  };

  return (
    <>
      <section style={sectionStyle} id='qualities'>
        <div style={containerStyle}>
          {
            data[0].ourQualities.map((element, index) => {
              const cardColor = getCardColor(index);
              
              return(
                <div style={cardStyle} key={element.id}>
                  <div style={{
                    ...imageContainerStyle,
                    backgroundColor: cardColor,
                    
                  }}>
                    <img 
                      src={element.image} 
                      alt={element.title}
                      style={imageStyle}
                    />
                  </div>
                  <p style={titleStyle}>{element.title}</p>
                  <p style={descriptionStyle}>{element.description}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Qualities