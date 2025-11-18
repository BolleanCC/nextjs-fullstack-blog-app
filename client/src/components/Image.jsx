import { IKImage } from "imagekitio-react";

const Image = ({ src, className, w, h, alt }) => {
  // Check if src is a full URL (external image) or ImageKit path
  const isExternalUrl = src && (src.startsWith('http://') || src.startsWith('https://'));

  if (isExternalUrl) {
    // Use regular img tag for external URLs
    return (
      <img
        src={src}
        className={className}
        alt={alt}
        loading="lazy"
        style={{ width: w ? `${w}px` : '100%', height: h ? `${h}px` : 'auto' }}
      />
    );
  }

  // Use ImageKit for internal paths
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
