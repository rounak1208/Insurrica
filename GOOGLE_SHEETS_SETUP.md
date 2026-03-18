# Google Sheets Integration Guide for Insurrica

## Setup Steps

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. In Row 1, add these headers: `Timestamp | Name | Phone | Insurance Product | Message`

### Step 2: Create Apps Script Webhook
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.phone || '',
    data.insurance_product || '',
    data.message || ''
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (name it "Insurrica Leads Webhook")

### Step 3: Deploy as Web App
1. Click **Deploy > New deployment**
2. Select type: **Web app**
3. Set:
   - Description: "Insurrica Leads"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. **Copy the Web App URL** (it looks like `https://script.google.com/macros/s/XXXX/exec`)

### Step 4: Add URL to Backend
Add the webhook URL to your backend `.env` file:

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Then restart the backend server.

### How it Works
- Every time a visitor submits a lead form, data is saved to MongoDB AND pushed to your Google Sheet
- The Google Sheets push is non-blocking (won't slow down the form submission)
- If the webhook fails, leads are still safely stored in the database
