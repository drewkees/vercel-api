import { getColumn } from "../lib/sheets.js";

export default async function handler(req, res) {
  console.log("API /SALES TERRITORY invoked");

  try {
    console.log("Calling getColumn...");
    const data = await getColumn("SALES TERRITORY!A:A");
    // console.log("Data received:", data);

    res.status(200).json({ sheet: "SALES TERRITORY", columnA: data });
  } catch (err) {
    console.error("ERROR in /api/SALES TERRITORY:", err);
    res.status(500).json({ error: "Failed to read sheet" });
  }
}
