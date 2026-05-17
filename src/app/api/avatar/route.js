export const dynamic = "force-dynamic";

const BAD_REQUEST = 400;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response("Missing url", { status: BAD_REQUEST });
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(url);
  } catch {
    return new Response("Invalid url", { status: BAD_REQUEST });
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return new Response("Unsupported protocol", { status: BAD_REQUEST });
  }

  const upstreamResponse = await fetch(parsedUrl.toString(), {
    cache: "no-store",
  });

  if (!upstreamResponse.ok) {
    return new Response("Avatar unavailable", {
      status: upstreamResponse.status,
    });
  }

  return new Response(upstreamResponse.body, {
    headers: {
      "Content-Type":
        upstreamResponse.headers.get("content-type") || "image/*",
      "Cache-Control": "public, max-age=300",
    },
  });
}
