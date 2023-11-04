import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params}: any) {
  const id = params.storedId;
  const body = await request.json();
  try {
    // const result = await updateData(id, body);
    return NextResponse.json({ message: "OK", data: body }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}


export async function DELETE(request: NextRequest, {params}: any) {
  const id = params.storedId;
  try {
    // const result = await deleteData(id);
    return NextResponse.json({ message: "OK", data: id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
