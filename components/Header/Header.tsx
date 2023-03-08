import jwt from "jsonwebtoken";

type HeaderProps = {};

const Header = ({}: HeaderProps) => (
  <>
    <h1 className="text-xl text-center">Next.js App Icons Generator</h1>
    <p className="text-sm text-center">
      Generate app icons with auto generated{" "}
      <a
        className="underline decoration-1"
        target="_blank"
        rel="noopener"
        href="https://beta.nextjs.org/docs/api-reference/metadata"
      >
        metadata
      </a>{" "}
      output.
    </p>
    <span className="hidden" data-file-hash={jwt.sign({}, process.env.JWT_SECRET)} />
  </>
);

export default Header;
