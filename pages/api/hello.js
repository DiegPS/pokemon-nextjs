export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    res.status(200).json(JSON.stringify({ hola: "si" }));
  } else {
    // Handle any other HTTP method
    res.status(200).json({ hola: "si" });
  }
}
