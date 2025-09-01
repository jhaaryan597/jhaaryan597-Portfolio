import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="Contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Call to action */}
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in hiring an{" "}
          <span className="text-purple">iOS & Flutter Developer?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Let&apos;s connect and discuss how I can contribute to your team.
        </p>

        {/* Mail button */}
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanjha230705@gmail.com&su=Job%20Opportunity%20-%20iOS%20%26%20Flutter%20Developer&body=Hi%20Aryan,"
  target="_blank"
  rel="noopener noreferrer"
>
  <MagicButton
    title="Get in touch"
    icon={<FaLocationArrow />}
    position="right"
  />
</a>

      </div>

      {/* Footer bottom */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2025 Aryan Jha
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div key={info.id}>
              <Link href={info.link} target="_blank">
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <Image
                    src={info.img}
                    alt="icons"
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
