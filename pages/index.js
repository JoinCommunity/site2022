import Navbar from '@components/Navbar';
import BannerConference from '@components/BannerConference';
import Footer from '@components/Footer';
import Pricing from '@components/Pricing';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <BannerConference />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}
