// Parse the response
const response = pm.response.json();

// Check if the response contains the PDF content
if (response.pdfContent) {
  // Decode the Base64 PDF content
  const base64Pdf = response.pdfContent;
  const pdfBuffer = Buffer.from(base64Pdf, 'base64');

  // Save the PDF to a file (only works in Newman or Postman CLI)
  const fs = require('fs');
  const filePath = `./${pm.variables.get('policyNumber')}.pdf`;
  fs.writeFileSync(filePath, pdfBuffer);

  console.log(`PDF saved: ${filePath}`);
} else {
  console.error(
    `No PDF content found for policy number: ${pm.variables.get(
      'policyNumber'
    )}`
  );
}
