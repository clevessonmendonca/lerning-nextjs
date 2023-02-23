import Image from 'next/image'

import profilePic from '@/public/images/download.png'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Image src={profilePic} width={200} height={200} alt="Camera photo" />
    </div>
  );
}
