const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

export const pathToImage = (url: string) => {
  if (!url || typeof url != "string") return;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return backend + url;
};
