export default async function handler(req, res) {
  const { league, type } = req.query;
  const url = `https://api.football-data.org/v4/competitions/${league}/${type}`;

  const response = await fetch(url, {
    headers: { "X-Auth-Token": "243ce89e74964f45991437e45d9c27f8" }
  });

  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}