import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { sun } from "../elements/sun";

export function iconPartlyCloudyDay(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  sun(ctx, time, width * 0.625, height * 0.375, shorter * 0.75, shorter * STROKE, color);
  cloud(ctx, time, width * 0.375, height * 0.625, shorter * 0.75, shorter * STROKE, color);
}
