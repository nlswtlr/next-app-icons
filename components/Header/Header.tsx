import { sign } from "jsonwebtoken";

import Headline from "./components/Headline";

const Header = async () => {
  fetch("https://google.com", { cache: "no-store" });
  const token = sign({ data: "this is awesome" }, process.env.JWT_SECRET || "", {
    expiresIn: 10 * 60,
  });

  return (
    <>
      <Headline />
      <h2 className="text-sm text-center">
        Generate favicons/app icons with auto generated{" "}
        <a
          className="underline decoration-1"
          target="_blank"
          rel="noopener"
          href="https://beta.nextjs.org/docs/api-reference/metadata#icons"
        >
          metadata
        </a>{" "}
        output
        <br />
        for your Next.js apps v13.2 and newer.
      </h2>
      <span className="hidden" data-file-hash={token} />
    </>
  );
};

export default Header;
