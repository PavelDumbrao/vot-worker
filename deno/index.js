import { Application, Status } from "@oak/oak";
import { corsHeaders } from "./config.js"; // удаляем host, port из импорта
import mainRouter from "./routes/index.js";

const app = new Application();

// Global CORS
app.use(async (ctx, next) => {
  for (const corsHeaderKey of Object.keys(corsHeaders)) {
    ctx.response.headers.set(corsHeaderKey, corsHeaders[corsHeaderKey]);
  }
  if (ctx.request.method === "OPTIONS") {
    ctx.response.status = Status.NoContent;
    return;
  }
  await next();
});

app.use(mainRouter.routes());

// Главная фишка — получение порта из ENV:
const PORT = Deno.env.get("PORT") || "8080";
// Можно явно указать, что слушаем на всех интерфейсах:
console.log(`🐿️ Oak is running at 0.0.0.0:${PORT}`);
await app.listen({ hostname: "0.0.0.0", port: Number(PORT) });
