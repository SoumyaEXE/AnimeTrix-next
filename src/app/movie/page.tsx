import ServerError from '@/components/error/ServerError';
import VerticalCards from '@/components/shared/cards/VerticalCards';
import React from 'react'
const getAnimeMovies = async () => {
  try {
    const response = await fetch("https://animetrix-api.vercel.app/meta/anilist/MOVIE?perPage=24");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending anime:", error);
    return [];
  }
};
export default async function page() {
  const Movies = await getAnimeMovies()
  return (
    <>
      {Movies.length > 0 ? (
        <VerticalCards title={"Movies"} data={Movies} />
      ) : (
        <ServerError />
      )}
    </>
  )
}