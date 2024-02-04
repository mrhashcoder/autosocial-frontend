// pages/api/example.js

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type"
    );

    // Handle the request
    if (req.method === "OPTIONS") {
        // Preflight request response
        res.status(200).end();
        return;
    }

    // Process your API logic here
    res.status(200).json({ message: "Hello from the API route!" });
}
