export default async function handler(req, res) {
  const url =
    "https://monxcxbrwkjaiwaiosdg.supabase.co/rest/v1/snapshots_meta?select=*&order=snapshot_time.desc&limit=48";

  try {
    const response = await fetch(url, {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vbnhjeGJyd2tqYWl3YWlvc2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NzgwNzUsImV4cCI6MjA4NTE1NDA3NX0.xHJNYLKKzhuMmHuJvm_agIKQq5puEeuyQlQCgxmJMmI",
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy failed" });
  }
}
