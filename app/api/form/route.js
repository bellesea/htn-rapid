import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json();

    const googleResponse = await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdPOLUxfUFCuvzvvaLP3hKfUI-p-UQueTA0_fsiRNO0R3NiDQ/formResponse",
      {
        body: new URLSearchParams({
          "entry.1370242340": data.email,
        }).toString(),
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (googleResponse.ok) {
      return NextResponse.json({ status: "success" }, { status: 200 });
    } else {
      return NextResponse.json(
        { status: "error", error: "Failed to submit form" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return NextResponse.json(
      { status: "error", error: error.message },
      { status: 500 }
    );
  }
}
