import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ingegneri & Co",
    short_name: "Ingegneri & Co",
    description:
      "Rete tecnica multidisciplinare per ingegneria, edilizia, energia, automazione e soluzioni digitali.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a4d7c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
