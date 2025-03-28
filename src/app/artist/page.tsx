"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page() {
  const { isError, isPending, data } = useQuery({
    queryKey: ["wallpapers"],
    queryFn: async () => {
      const result = await axios.get("/api/wallpapers");

      if (result.status !== 200) {
        throw new Error("Failed to fetch wallpapers");
      }

      return result.data;
    },
  });

  if (isError) {
    return <div>Failed To Fetch Wallpaper</div>;
  }

  if (isPending) {
    return <div>Fetching Wallpapers</div>;
  }

  return (
    <div>
      {data.map((wallpaper: { id: string; name: string }) => (
        <div key={wallpaper.id}>
          <h3>{wallpaper.name}</h3>
        </div>
      ))}
    </div>
  );
}
