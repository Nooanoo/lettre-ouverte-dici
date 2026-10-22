exports.handler = async function () {
  const token = process.env.NETLIFY_AUTH_TOKEN;
  const siteId = process.env.SITE_ID;
  if (!token || !siteId) {
    return { statusCode: 503, headers: { "content-type": "application/json", "cache-control": "no-store" }, body: JSON.stringify({ error: "Counter not configured" }) };
  }

  try {
    let page = 1;
    let count = 0;
    const perPage = 100;
    while (true) {
      const response = await fetch(
        `https://api.netlify.com/api/v1/sites/${encodeURIComponent(siteId)}/submissions?per_page=${perPage}&page=${page}`,
        { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } }
      );
      if (!response.ok) throw new Error(`Netlify API returned ${response.status}`);
      const submissions = await response.json();
      if (!Array.isArray(submissions)) throw new Error("Unexpected API response");
      count += submissions.filter(s => s && s.form_name === "signatures-petition").length;
      if (submissions.length < perPage) break;
      page += 1;
      if (page > 1000) throw new Error("Pagination limit reached");
    }

    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store", "access-control-allow-origin": "*" },
      body: JSON.stringify({ count })
    };
  } catch (error) {
    return { statusCode: 502, headers: { "content-type": "application/json", "cache-control": "no-store" }, body: JSON.stringify({ error: "Unable to retrieve signatures" }) };
  }
};
