"use client";
import { encode } from "qss";
import React, { useState } from "react";
import Image from "next/image";

type LinkPreviewProps = {
  children?: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkImage = ({
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const [imageError, setImageError] = useState(false);

  let src;
  if (!isStatic) {
    
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    
    src = imageSrc;
  }

  
  const fallbackImage = '/2.jpeg';

  return (
    <div className={className}>
      <Image
        src={imageError ? fallbackImage : src} 
        width={width}
        height={height}
        alt="Link preview image"
        className="rounded-lg"
        onError={() => setImageError(true)}
      />
    </div>
  );
};
