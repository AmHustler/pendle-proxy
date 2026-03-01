export default async function handler(req, res) {
  const response = await fetch(
    "https://monxcxbrwkjaiwaiosdg.supabase.co/functions/v1/get_all_yt_snapshots"
  );

  const data = await response.json();
  res.status(200).json(data);
}
