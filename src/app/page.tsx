import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoCred',
  description: 'EcoCred is an AI-driven micro-SaaS tool that helps e-commerce businesses track and display their sustainability credentials to attract eco-conscious customers.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoCred</h1>
      <p className="mt-4 text-lg">EcoCred is an AI-driven micro-SaaS tool that helps e-commerce businesses track and display their sustainability credentials to attract eco-conscious customers.</p>
    </main>
  )
}
