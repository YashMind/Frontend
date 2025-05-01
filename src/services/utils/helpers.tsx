const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

export const pathToImage = (url: string) => {
  if (!url || typeof url != "string") return;
  return backend + url;
};
