import { Router } from "@oak/oak";
const ttsRouter = new Router();

ttsRouter.post("/", async (ctx) => {
  const body = await ctx.request.body({ type: "json" }).value;
  ctx.response.body = {
    ok: true,
    received: body,
    message: "vot-worker принимает POST /api/tts!"
  };
});

export default ttsRouter;
