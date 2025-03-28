import { usePathname } from "next/navigation";

type HideHeaderProps = {
  pathname: string | string[];
};

export function useHide({ pathname }: HideHeaderProps) {
  const currentPath = usePathname();

  if (Array.isArray(pathname)) {
    return pathname.some((path) => currentPath.startsWith(path));
  }

  return currentPath.startsWith(pathname);
}
