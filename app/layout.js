import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-black text-white'>
        <nav className='bg-black text-white px-4 py-4 border-b border-slate-500 mb-4'>
          <ul className="flex gap-x-4 justify-center items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
