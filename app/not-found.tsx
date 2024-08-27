import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
      <h2 className='text-9xl mb-14'>Not Found  👻 </h2>

      <p className='text-2xl'>Please Go back</p>
      <Link href="/" className='bg-blue-600 px-5 py-3 rounded-md mt-5'>Return Home</Link>
    </div>
  )
}
