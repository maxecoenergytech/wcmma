const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/wcmma";

export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const getRoutePath = (path: string): string => {
  if (!path) return base || "/";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("#")) {
    return `${base}/${path}`;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
