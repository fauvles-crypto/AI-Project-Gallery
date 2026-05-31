import { NextResponse } from "next/server";
import { getPrompts } from "../../../lib/prompts";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? undefined;

  const data = getPrompts(category);

  return NextResponse.json({ data, total: data.length });
}
