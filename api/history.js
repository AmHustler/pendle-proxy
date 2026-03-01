export default async function handler(req, res) {
  const { chain_id, yt_address, timeframe } = req.body;

  const response = await fetch(
    "https://monxcxbrwkjaiwaiosdg.supabase.co/functions/v1/get_yt_history_bucketed",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chain_id, yt_address, timeframe }),
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
