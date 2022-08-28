import Navbar from '@components/Navbar';
import BannerConference from '@components/BannerConference';
import Footer from '@components/Footer';
import Pricing from '@components/Pricing';
import AboutUs from '@components/AboutUs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <BannerConference />
        <AboutUs />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}
