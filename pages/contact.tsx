import type { NextPage } from 'next'
import HeadInfo from '../components/headinfo'
import Navbar from '../components/navbar'

const Contact: NextPage = () => {
  return (
  <main>
    <HeadInfo />
    <Navbar />
    <p className='p-5'>
      Hi!
    </p>
  </main>
  )
}


export default Contact