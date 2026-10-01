import Image from "next/image";

import styles from "../css/CroppedImage.module.css";

/**
 * An image cropped (and optionally rotated) as in Figma. `frame` is the slot's
 * [width, height], `box` the clipping box inside it as [width, height,
 * rotation°], and `crop` the image's [left, top, width, height] in % of the
 * box. The slot scales down with its container, never above `frame` width.
 */
export default function CroppedImage({
  src,
  alt,
  width,
  height,
  frame,
  box = [...frame, 0],
  crop,
  preload = false,
  className = "",
}) {
  const [frameWidth, frameHeight] = frame;
  const [boxWidth, boxHeight, rotate] = box;
  const [left, top, cropWidth, cropHeight] = crop;
  // Rendered image width at full size, and as a share of the slot width.
  const imageWidth = Math.round((cropWidth / 100) * boxWidth);
  const imageVw = Math.round((imageWidth / frameWidth) * 100);

  return (
    <div
      className={`${styles.frame} ${className}`}
      style={{
        "--frame-width": `${frameWidth}px`,
        "--frame-ratio": `${frameWidth} / ${frameHeight}`,
      }}
    >
      <div
        className={styles.box}
        style={{
          "--box-width": `${(boxWidth / frameWidth) * 100}%`,
          "--box-height": `${(boxHeight / frameHeight) * 100}%`,
          "--box-rotate": `${rotate}deg`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          preload={preload}
          sizes={`(min-width: 768px) ${imageWidth}px, ${imageVw}vw`}
          className={styles.image}
          style={{
            "--crop-left": `${left}%`,
            "--crop-top": `${top}%`,
            "--crop-width": `${cropWidth}%`,
            "--crop-height": `${cropHeight}%`,
          }}
        />
      </div>
    </div>
  );
}
