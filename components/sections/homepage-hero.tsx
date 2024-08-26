import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe-yZeW2UYcOsPaXZH46RgTRm1C7AEKyn7KyNSCTj3EB1L-iA/viewform?usp=sf_link"
      size="medium"
    >
      <span>Interested? Join the Waitlist Here!</span> <Highlight>→</Highlight>
    </Button>

    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      BrandSync
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      The Future of Influencer Marketing, Powered by AI.
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
