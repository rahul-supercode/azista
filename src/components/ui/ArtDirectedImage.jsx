import { getImageProps } from "next/image";

/**
 * Full-bleed (`fill`) image with a separate mobile and desktop crop, switched
 * at the tablet breakpoint. A single <picture> means the browser downloads
 * only the crop it shows. `priority` marks the above-the-fold LCP image.
 */
export default function ArtDirectedImage({
  mobileSrc,
  desktopSrc,
  alt,
  priority = false,
  className,
}) {
  const common = {
    alt,
    fill: true,
    sizes: "100vw",
    ...(priority && { loading: "eager", fetchPriority: "high" }),
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: desktopSrc });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: mobileSrc });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <img {...rest} srcSet={mobile} alt={alt} className={className} />
    </picture>
  );
}
