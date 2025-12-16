const { google } = require("googleapis");

const SPREADSHEET_ID = "1JJDh_w_opcdy3QNPZ-1xh-wahsx_t0iElBw95TwK8iY";

let auth, sheetsClient;

function getAuth() {
  if (!auth) {
    const creds = JSON.parse(process.env.SERVICE_ACCOUNT_JSON);
    auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
  }
  return auth;
}

async function getSheetsClient() {
  if (!sheetsClient) {
    const client = await getAuth().getClient();
    sheetsClient = google.sheets({ version: "v4", auth: client });
  }
  return sheetsClient;
}

async function getColumn(range) {
  const sheets = await getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range,
  });
  return res.data.values || [];
}

module.exports = { getColumn };
