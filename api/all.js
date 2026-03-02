export default async function handler(req, res) {
  // ✅ CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://monxcxbrwkjaiwaiosdg.supabase.co/functions/v1/get_latest_yt_overview"
    );

    const data = await response.json();

    return res.status(200).json({
      success: true,
      snapshot_time: data.snapshot_time,
      count: data.count,
      data: data.data,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
