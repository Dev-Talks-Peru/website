import icons from "~/assets/icons.svg";

type IconProps = {
  name: string;
  className?: string;
  width: number;
  height: number;
};

export function Icon({ name, className, width, height }: IconProps) {
  return (
    <svg
      aria-hidden
      className={className}
      role="img"
      width={width}
      height={height}
    >
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
}
