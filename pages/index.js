import Navbar from '@components/Navbar';
import BannerConference from '@components/BannerConference';
import AboutUs from '@components/AboutUs';
import Partners from '@components/Partners';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <BannerConference />
        <AboutUs />
        <Partners />
      </div>
    </div>
  )
}
