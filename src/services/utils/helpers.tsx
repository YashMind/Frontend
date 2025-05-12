const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

export const pathToImage = (url: string) => {
  if (!url || typeof url != "string") return;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return backend + url;
};

export const formatName = (name: string) => {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
