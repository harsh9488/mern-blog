import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className=" border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Harsh's
              </span>
              Blog
            </Link>
          </div>
          <div className=" grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  100 JS Project
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Harsh's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/harsh9488"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/harsh9488"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Harsh's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="https://github.com/harsh9488" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
