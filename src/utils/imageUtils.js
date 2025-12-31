// Utility function to generate optimized Cloudinary URLs
export const getOptimizedImageUrl = (baseUrl, options = {}) => {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
  } = options;

  // Extract the upload path from the URL
  const urlParts = baseUrl.split("/upload/");
  if (urlParts.length !== 2) return baseUrl;

  const transformations = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (quality !== "auto") transformations.push(`q_${quality}`);
  if (format !== "auto") transformations.push(`f_${format}`);
  else transformations.push("f_auto");

  transformations.push("q_auto");

  const transformationString = transformations.join(",");

  return `${urlParts[0]}/upload/${transformationString}/${urlParts[1]}`;
};

// Generate srcset for responsive images
export const generateSrcSet = (baseUrl, widths = [400, 800, 1200]) => {
  return widths
    .map((width) => `${getOptimizedImageUrl(baseUrl, { width })} ${width}w`)
    .join(", ");
};

// Generate sizes attribute
export const getSizes = (
  sizes = "(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
) => {
  return sizes;
};
