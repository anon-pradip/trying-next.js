import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Movie = ({ title, id, poster_path, release_date }) => {
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`} className=''>
        <Image src={imagePath + poster_path} alt={title} width={300} height={300} />
      </Link>
    </div>
  )
}

export default Movie