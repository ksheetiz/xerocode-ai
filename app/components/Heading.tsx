"use client";

interface HeadingProps {
  title ?: string;
  subtitle?: string;
  center?: boolean;
  gradient?: boolean;
  combination? : string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  gradient,
  combination
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1
        className={`text-5xl font-normal bg-clip-text text-transparent ${
          gradient
            ? combination
            : "bg-white"
        }`}
      >
        {title}
      </h1>
      <div className="font-normal text-xl text-neutral-200 mt-1">{subtitle}</div>
    </div>
  );
};
