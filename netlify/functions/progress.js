import { getStore } from "@netlify/blobs";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8" }
});

export default async (request) => {
  const url = new URL(request.url);
  const visitorId = url.searchParams.get("id");

  // The random browser ID acts as an unguessable key for this personal tracker.
  if (!visitorId || !/^[a-f0-9-]{36}$/i.test(visitorId)) {
    return json({ error: "A valid progress ID is required." }, 400);
  }

  if (request.method !== "GET" && request.method !== "PUT") {
    return json({ error: "Method not allowed." }, 405);
  }

  try {
    const store = getStore("marvel-marathon-progress");

    if (request.method === "GET") {
      const progress = await store.get(visitorId, { type: "json" });
      return json({ found: progress !== null, progress: progress ?? [] });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body." }, 400);
    }

    if (!Array.isArray(body.progress) || body.progress.length > 100 ||
        body.progress.some(index => !Number.isInteger(index) || index < 0 || index > 100)) {
      return json({ error: "Progress must be an array of valid title indexes." }, 400);
    }

    const progress = [...new Set(body.progress)];
    await store.setJSON(visitorId, progress);
    return json({ saved: true });
  } catch (error) {
    console.error("Unable to access marathon progress storage", error);
    return json({ error: "Progress storage is temporarily unavailable." }, 500);
  }
};
