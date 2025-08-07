import { Router } from "@oak/oak";
const ttsRouter = new Router();

ttsRouter.post("/", async (ctx) => {
  const body = await ctx.request.body.value;  // <-- важная строка!
  ctx.response.body = {
    ok: true,
    received: body,
    message: "vot-worker принимает POST /api/tts!"
  };
});

export default ttsRouter;
