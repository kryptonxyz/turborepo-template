import type { NextPage } from 'next'
import { Button } from 'ui'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col mt-36">
      <div className="flex items-center justify-center self-center bg-black">
        <h1 className="text-6xl font-bold text-white uppercase py-4 px-7">Next Template</h1>
      </div>
      <div className="mt-10 flex justify-center">
        <Button>Surprise!</Button>
      </div>
    </div>
  )
}

export default Home
