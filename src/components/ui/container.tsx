import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: "default" | "narrow" | "wide";
};

const widths: Record<NonNullable<ContainerProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export const Container = ({
  width = "default",
  className,
  children,
  ...rest
}: ContainerProps) => (
  <div
    className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widths[width], className)}
    {...rest}
  >
    {children}
  </div>
);
