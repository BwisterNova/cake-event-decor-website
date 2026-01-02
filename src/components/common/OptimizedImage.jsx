import React from "react";
import { motion } from "framer-motion";
import { getOptimizedImageUrl, generateSrcSet } from "../../utils/imageUtils";

const OptimizedImage = React.forwardRef(
  (
    {
      src,
      alt,
      className,
      sizes = "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px",
      widths = [400, 800, 1200],
      loading = "lazy",
      ...props
    },
    ref
  ) => {
    const optimizedSrc = getOptimizedImageUrl(src, { width: widths[0] });
    const srcSet = generateSrcSet(src, widths);

    return (
      <motion.img
        ref={ref}
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
