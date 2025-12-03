const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

export const pathToImage = (url: any) => {
  if (!url || typeof url != "string") return;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return backend + url;
};

export const formatName = (name: any) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
