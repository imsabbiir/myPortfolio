import dbConnect from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const totalProjects = await Project.countDocuments();

    return NextResponse.json({
      total: totalProjects,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching total projects" },
      { status: 500 }
    );
  }
}