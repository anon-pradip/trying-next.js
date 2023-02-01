import Image from "next/image";

const MovieDetail = async ({ params }) => {
  const imagePath = "https://image.tmdb.org/t/p/original"
  const { movie } = params;
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-2/3">
          <Image className="w-full rounded-sm" src={imagePath + res.backdrop_path} alt={res.title} height={200} width={200} priority />
        </div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className=" text-lg">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-700 rounded-sm px-4 py-2 my-2 inline-block mb-4">{res.status}</h2>
        <p className="text-slate-400 border-t py-4 border-slate-700 max-w-md text-justify">{res.overview}</p>
      </div>
    </>
  )
}

export default MovieDetail;