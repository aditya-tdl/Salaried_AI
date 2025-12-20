export const dynamic = "force-static";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://aditya-tdl.github.io/SalariedAI/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
