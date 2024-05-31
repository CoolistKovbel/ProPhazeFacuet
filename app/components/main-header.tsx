
import Link from 'next/link'


const MainHeader = () => {
  return (
    <header className="w-full bg-[#222] p-4 rounded-lg drop-shadow-lg">

    <h1 className="text-4xl mb-2 font-bold ">ProPhazeFacuet 😶‍🌫️ </h1>

    <nav className="text-xl font-bold flex item-center gap-4">
      <Link href="/" className="bg-[#111] p-2 rounded-lg">Home</Link>
      <Link href="/about" className="bg-[#111] p-2 rounded-lg">About</Link>
      <Link href="/faucet" className="bg-[#111] p-2 rounded-lg">Faucet</Link>
    </nav>

  </header>
  )
}

export default MainHeader