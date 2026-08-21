export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(`
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Telegram Lite</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f7fb;
      text-align: center;
    }
    .header {
      background: #229ed9;
      color: white;
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
    }
    .box {
      margin: 40px 20px;
      padding: 30px 20px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 4px 15px rgba(0,0,0,.1);
    }
    button {
      background: #229ed9;
      color: white;
      border: 0;
      padding: 14px 25px;
      border-radius: 8px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="header">Telegram Lite</div>

  <div class="box">
    <h2>Welcome</h2>
    <p>Your Telegram Lite website is working.</p>
    <button onclick="alert('Telegram Lite is ready!')">
      Get Started
    </button>
  </div>
</body>
</html>
      `, {
        headers: {
          "content-type": "text/html;charset=UTF-8"
        }
      });
    }

    return new Response("Not Found", { status: 404 });
  }
};
