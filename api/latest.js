export default async function handler(req, res) {
  // ✅ CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { chain_id, yt_address } = req.query;

  const url = `https://monxcxbrwkjaiwaiosdg.supabase.co/functions/v1/get_latest_yt_snapshot?chain_id=${chain_id}&yt_address=${yt_address}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Proxy failed",
    });
  }
}
