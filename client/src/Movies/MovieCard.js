import React from 'react';
import styled from 'styled-components';

const MovieCardStyle = styled.div `
  width: 70%;
  background-color: rgba(32, 211, 151, 0.853);
  border-radius: 10px;
  box-shadow: 10px 5px rgba(12, 47, 40, 0.95);
  color: rgb(15, 71, 59);
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px  rgba(163, 255, 224, 0.979);
  text-align: center;
  padding: 4%;
  font-size: 1.3rem;
`
const HeaderStyle = styled.div `
  text-decoration: none;
  font-weight: bolder;
  text-shadow: 1px 2px rgba(163, 255, 224, 0.979);
  font-size: 1.5rem;
`
const H3Style = styled.h3 `
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bolder;
  text-shadow: 1px 2px rgba(163, 255, 224, 0.979);
  `
const MovieTitle = styled.h2 `
  font-size: 2rem;
  text-decoration: none;
  font-weight: bolder;
  text-shadow: 2px 2px rgba(163, 255, 224, 0.979);
`

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <MovieCardStyle className="movie-card">
      <MovieTitle>{title}</MovieTitle>
      <HeaderStyle className="movie-director">
        Director: <em>{director}</em>
      </HeaderStyle>
      <HeaderStyle className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </HeaderStyle>
      <H3Style>Actors</H3Style>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </MovieCardStyle>
  );
};

export default MovieCard;
