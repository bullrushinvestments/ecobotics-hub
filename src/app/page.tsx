import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoBotics Hub',
  description: 'EcoBotics Hub provides personalized sustainable automation solutions for small businesses and e-commerce stores. It combines the efficiency of no-code platforms with sustainability metrics to help businesses reduce their environmental footprint.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoBotics Hub</h1>
      <p className="mt-4 text-lg">EcoBotics Hub provides personalized sustainable automation solutions for small businesses and e-commerce stores. It combines the efficiency of no-code platforms with sustainability metrics to help businesses reduce their environmental footprint.</p>
    </main>
  )
}
