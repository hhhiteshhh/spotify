import Head from 'next/head'
import SideBar from '../components/SideBar'
import Center from '../components/Center'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        {/* sidebar */}
        <SideBar />
        {/* center */}
        <Center />
      </main>
      <div>{/* player */}</div>
    </div>
  )
}
