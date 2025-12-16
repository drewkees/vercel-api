const { getColumn } = require("../lib/sheets");

module.exports = async (req, res) => {
  try {
    const data = await getColumn("SALES TERRITORY!A:A");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
