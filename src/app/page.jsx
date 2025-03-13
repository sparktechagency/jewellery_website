
import Hero from '../../src/components/home/Hero'
import DiscoverCollection from '../../src/components/home/DiscoverCollection'
import OurPopularItems from '../../src/components/home/OurPopularItems'
import ShopStunning from '../../src/components/home/ShopStunning'
import Review from '../../src/components/home/Review'
const Home = () => {
  return (
    <div >
      <Hero></Hero>
      <DiscoverCollection></DiscoverCollection>
      <OurPopularItems></OurPopularItems>
      <ShopStunning></ShopStunning>
      <Review></Review>
    </div>
  );
};

export default Home;


