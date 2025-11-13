"use client";

import { encode } from "qss";
import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";

type LinkPreviewProps = {
  children?: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: "intrinsic" | "fixed" | "responsive" | "fill";
  fallbackImage?: string; 
  isStatic?: boolean;
  imageSrc?: string;
};

export const LinkImage = ({
  url,
  className = "",
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
  fallbackImage = "/2.jpeg",
}: LinkPreviewProps) => {
  const [imageError, setImageError] = useState(false);

  const src = useMemo(() => {
    if (isStatic) {
      return imageSrc;
    }

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

    return `https://api.microlink.io/?${params}`;
  }, [isStatic, url, imageSrc, width, height]);

  const handleError = useCallback(() => setImageError(true), []);

  const finalWidth = Math.max(width, 1); 
  const finalHeight = Math.max(height, 1); 

  return (
    <div className={className}>
      <Image
        src={imageError ? fallbackImage : src}
        width={finalWidth}
        height={finalHeight}
        alt={`Preview of ${url}`}
        className="rounded-lg"
        onError={handleError}
        layout={layout}
        quality={quality}
        loading="lazy" 
      />
    </div>
  );
};
