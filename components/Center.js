import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { shuffle } from 'lodash'
import { useRecoilValue } from 'recoil'
import { playlistIdState } from '../atoms/playlistIdAtom'
const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]

function Center() {
  const { data: session, status } = useSession()
  const [color, setColor] = useState(null)
  const [playlistId] = useRecoilValue(playlistIdState)
  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div
          className="flex cursor-pointer items-center space-x-3 rounded-full bg-red-300 p-1 pr-2 opacity-90 hover:opacity-80"
          onClick={() => {
            signOut()
          }}
        >
          <img
            src={session?.user.image}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
      >
        {/* <img></img> */}
      </section>
    </div>
  )
}

export default Center
