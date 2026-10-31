export default async function handler(req, res) {
  const { league, type } = req.query;
  const url = `https://api.football-data.org/v4/competitions/${league}/${type}`;

  const response = await fetch(url, {
    headers: { "X-Auth-Token": "8de2412fbed2463aa4a193b9ad372f65" }
  });

  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
