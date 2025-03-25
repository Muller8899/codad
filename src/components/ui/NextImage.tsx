import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

export const NextImage = forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    return <Image {...props} ref={ref} unoptimized />;
  }
);

NextImage.displayName = "NextImage";
