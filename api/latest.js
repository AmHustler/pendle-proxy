export default async function handler(req, res) {
  const { chain_id, yt_address } = req.query;

  const url = `https://monxcxbrwkjaiwaiosdg.supabase.co/functions/v1/get_latest_yt_snapshot?chain_id=${chain_id}&yt_address=${yt_address}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: "Proxy failed" });
  }
}
