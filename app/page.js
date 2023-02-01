import Movie from "./Movie";

export default async function Home() {
  const base_url = "https://api.themoviedb.org/3/movie/550?api_key=";

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);

  const res = await data.json()

  if (!res?.results?.length) {
    return (
      <div className='mt-24 ml-28'>Loading...</div>
    )
  } else {
    return (
      <main className='bg-black text-white'>
        <div className="grid gap-16 grid-cols-fluid px-4 place-items-center">
          {res.results.map(movie => <Movie
            key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path}
            release_date={movie.release_date}
          />)}
        </div>
      </main>
    )
  }
}
