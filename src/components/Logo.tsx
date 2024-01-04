import Link from "next/link";

interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties; // Add style prop
}

const Logo = ({ title, className, style }: Props) => {
  return (
    <Link href={"/"}>
      <h1 style={style} className={`text-3xl font-extrabold uppercase ${className}`}>
        {title || "Tech Blog"}
      </h1>
    </Link>
  );
};

export default Logo;
