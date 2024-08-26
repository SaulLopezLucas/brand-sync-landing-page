import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Interested? Join the Waitlist Here!</span>{" "}
      <Highlight>→</Highlight>
    </Button>

    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      BrandSync: The Smart Way to Connect
      <br className="hidden md:block" /> Influencers and Brands
    </HeroTitle>

    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Discover the new standard for influencer marketing.
      <br className="hidden md:block" /> Streamline your connections and grow
      your brand.
    </HeroSubtitle>

    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Get a Walkthrough</span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>

    <HeroImage />
  </Hero>
);
