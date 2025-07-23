const fs = require('fs');
const path = require('path');

// Paths
const publicPath = path.join(process.cwd(), 'public');
const exportPath = path.join(process.cwd(), 'export');
const faviconSrc = path.join(publicPath, 'favicon.ico');
const faviconDest = path.join(exportPath, 'favicon.ico');

// Create a function to copy the favicon
function copyFavicon() {
  try {
    // Check if the public favicon exists
    if (fs.existsSync(faviconSrc)) {
      console.log('Copying favicon.ico to export directory...');
      
      // Create a read stream from the source file
      const readStream = fs.createReadStream(faviconSrc);
      
      // Create a write stream to the destination
      const writeStream = fs.createWriteStream(faviconDest);
      
      // Pipe the read stream to the write stream
      readStream.pipe(writeStream);
      
      // Handle completion
      writeStream.on('finish', () => {
        console.log('✅ favicon.ico successfully copied to export directory!');
      });
      
      // Handle errors
      writeStream.on('error', (err) => {
        console.error('Error copying favicon.ico:', err);
      });
    } else {
      console.error('❌ favicon.ico not found in public directory!');
    }
  } catch (error) {
    console.error('Error during favicon copy:', error);
  }
}

// Create a custom 404.html file
function create404Page() {
  const html404 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found - Amr H. Metwaly</title>
  <link rel="icon" href="/favicon.ico" />
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #000;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
    .container {
      max-width: 600px;
      background-color: rgba(16, 24, 39, 0.8);
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 0 30px rgba(0, 112, 243, 0.3);
    }
    h1 {
      color: #3b82f6;
      font-size: 2.5rem;
      margin-bottom: 16px;
    }
    p {
      font-size: 1.25rem;
      margin-bottom: 24px;
      color: #e5e7eb;
    }
    a {
      display: inline-block;
      background-color: #3b82f6;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s;
    }
    a:hover {
      background-color: #2563eb;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn't exist or has been moved.</p>
    <a href="/">Return to Homepage</a>
  </div>
</body>
</html>`;

  const page404Path = path.join(exportPath, '404.html');
  
  try {
    fs.writeFileSync(page404Path, html404);
    console.log('✅ Custom 404.html page created successfully!');
  } catch (error) {
    console.error('Error creating 404.html page:', error);
  }
}

// Execute the functions
copyFavicon();
create404Page(); 