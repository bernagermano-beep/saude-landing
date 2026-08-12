type ResponsiveImageProps = {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
};

const ResponsiveImage = ({
  src,
  webpSrc,
  avifSrc,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
}: ResponsiveImageProps) => {
  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
    />
  );

  if (!webpSrc && !avifSrc) return img;

  return (
    <picture>
      {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      {img}
    </picture>
  );
};

export default ResponsiveImage;
