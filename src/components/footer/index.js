import { useState } from "preact/hooks";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const clearEmail = () => {
    setEmail("");
  };

  return (
    <div className="w-100 flex flex-column">
      <div className="flex flex-column items-center justify-center bg-near-white w-100 pv2">
        <h2 className="f2 ma0 pa2">Subscribe</h2>
        <p className="ma0 pv2 ph2">
          Get the latest news delivered every morning
        </p>
        <div className="flex flex-column flex-row-ns mv2 pa2 items-center">
          <input
            className="b--none pv2 ph4 br4 f4 w-80"
            placeholder="Enter your email"
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
          />
          <button
            className="pv2 ph4 white bg-dark-green mh4 b--none f4 br4 pointer w-80 mv4"
            onClick={clearEmail}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg-black white pa2 flex f5 no-underline white items-center justify-around">
        <Link className="white no-underline mv2" href="#">
          <a className="white no-underline mv2">Help</a>
        </Link>
        <Link className="white no-underline mv2" href="#">
          <a className="white no-underline mv2">Contact Us</a>
        </Link>
        <Link className="white no-underline mv2" href="#">
          <a className="white no-underline mv2">Privacy Policy</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
