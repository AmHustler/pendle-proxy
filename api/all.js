export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://monxcxbrwkjaiwaiosdg.supabase.co/functions/v1/get_latest_yt_overview"
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: "Proxy failed" });
  }
}
