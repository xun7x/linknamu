import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDocument = {
  _id: string;
  count: number;
};

const COLLECTION = "clicks";

export async function GET() {
  const client = await clientPromise;
  const collection = client.db().collection<ClickDocument>(COLLECTION);
  const docs = await collection.find().toArray();

  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const linkId = body?.linkId;

  if (typeof linkId !== "string" || !linkId) {
    return NextResponse.json({ error: "Invalid linkId" }, { status: 400 });
  }

  const client = await clientPromise;
  const collection = client.db().collection<ClickDocument>(COLLECTION);
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
