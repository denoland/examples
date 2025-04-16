const port = 8000;
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

if (!OPENAI_API_KEY) {
  console.error("Please set OPENAI_API_KEY in .env file");
  Deno.exit(1);
}

// HTML content for the chat interface
const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>ChatGPT Interface</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        #response {
            white-space: pre-wrap;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>ChatGPT Interface</h1>
        <textarea id="prompt" placeholder="Enter your prompt here..."></textarea>
        <button onclick="sendPrompt()">Send to ChatGPT</button>
        <div id="response"></div>
    </div>
    <script>
        async function sendPrompt() {
            const promptText = document.getElementById('prompt').value;
            const responseDiv = document.getElementById('response');
            
            responseDiv.style.display = 'block';
            responseDiv.textContent = 'Loading...';
            
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: promptText }),
                });
                
                const data = await response.json();
                responseDiv.textContent = data.response;
            } catch (error) {
                responseDiv.textContent = 'Error: ' + error.message;
            }
        }
    </script>
</body>
</html>`;

// Use Deno.serve for the HTTP server
Deno.serve({ port }, async (request) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Handle root path - serve HTML content
  if (path === "/" && request.method === "GET") {
    console.log("Serving the chat interface...");
    return new Response(htmlContent, {
      headers: { "Content-Type": "text/html" },
    });
  }

  // Handle chat API endpoint
  if (path === "/api/chat" && request.method === "POST") {
    try {
      const { prompt } = await request.json();
      console.log("Prompt:", prompt);

      // Add your hardcoded system prompt here
      const systemPrompt =
        "You are a helpful AI assistant. Please provide clear and concise responses.";

      console.log("Sending request to OpenAI...");
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
        }),
      });

      console.log("Received response from OpenAI");
      const data = await response.json();

      console.log(data);
      return new Response(
        JSON.stringify({
          response: data.choices[0].message.content,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
      return new Response(
        JSON.stringify({ error: error }),
        { 
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
  }

  // Handle 404 for any other routes
  return new Response("Not Found", { status: 404 });
});

console.log(`Server is running on http://localhost:${port}`);
