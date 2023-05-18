import Nav from '@/components/Nav'
import { Productos } from '@/components/Productos'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div>
        <Nav/>
      </div>
      <div className='flex h-full'>
        <Sidebar/>
        <Productos/>
      </div>
      
    </main>
  )
}
