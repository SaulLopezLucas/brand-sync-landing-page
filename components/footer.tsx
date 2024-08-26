import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";
import { RedditIcon } from "./icons/reddit";
export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">
            <Logo className="mr-4 h-4 w-4" /> BrandSync - Designed Worldwide
          </div>
          <div className="mt-auto flex space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
            <RedditIcon/>
          </div>
        </div>
      </div>
  
    </Container>
  </footer>
);
