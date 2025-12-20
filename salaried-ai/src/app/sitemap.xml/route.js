export const dynamic = "force-static";

export function GET() {
  const baseUrl = "https://aditya-tdl.github.io/SalariedAI";

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
  </url>
  <url>
    <loc>${baseUrl}/signup</loc>
  </url>
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
