import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'

export const Event = () => {
  const { slug } = useParams<{ slug: string }>()
  const [showSidebar, setShowSidebar] = useState('hidden')

  return (
    <div className='flex flex-col min-h-screen'>
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className='flex flex-1 relative'>
        <main className='flex flex-col flex-1'>
          {slug ? <Video lessonSlug={slug} /> : <div className='flex-1'></div>}

          <Footer />
        </main>
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      </div>
    </div>
  )
}
