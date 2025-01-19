import ComponaysLogo from './ComponaysLogo'
import Faq from './Faq'
import Footer from './Footer'

import HeroSection from './HeroSection'
import NewsLetter from './NewsLetter'
import OurArticles from './OurArticles'
import OurExpert from './OurExpert'
import Pricing from './Pricing'
import Services from './Services'
import Testimonial from './Testimonial'
import ToolsSection from './ToolsSection'

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ToolsSection></ToolsSection>
      <ComponaysLogo></ComponaysLogo>
      <Services></Services>
      <Testimonial></Testimonial>
      <OurArticles></OurArticles>
      <OurExpert></OurExpert>
      <Pricing></Pricing>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  )
}

export default Home
