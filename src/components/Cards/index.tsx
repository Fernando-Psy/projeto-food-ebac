import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <div
    style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      margin: '8px',
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: '100%',
        borderRadius: '8px 8px 0 0',
        objectFit: 'cover',
        height: '180px',
      }}
    />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

type CardsProps = {
  items: CardProps[];
};

const Cards: React.FC<CardsProps> = ({ items }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
    {items.map((item, idx) => (
      <Card key={idx} {...item} />
    ))}
  </div>
);

export default Cards;
