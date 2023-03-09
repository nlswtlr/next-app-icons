import jwt from "jsonwebtoken";

type HeaderProps = {};

const Header = ({}: HeaderProps) => (
  <>
    <h1 className="text-xl text-center mb-4">Next.js App Icons Generator</h1>
    <h2 className="text-sm text-center">
      Generate favicons/app icons with auto generated{" "}
      <a
        className="underline decoration-1"
        target="_blank"
        rel="noopener"
        href="https://beta.nextjs.org/docs/api-reference/metadata"
      >
        metadata
      </a>{" "}
      output.
    </h2>
    <span
      className="hidden"
      data-file-hash={jwt.sign({ data: process.env.SECRET_PAYLOAD } || "", process.env.JWT_SECRET || "", {
        expiresIn: 10,
      })}
    />
  </>
);

export default Header;
