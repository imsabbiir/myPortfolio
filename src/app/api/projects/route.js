import dbConnect from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find();
    return Response.json(projects);
  } catch (e) {
    return Response.json(
      { message: "Error fetching doctors" },
      { status: 500 }
    );
  }
}


export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();

    const newProject = new Project(data);
    await newProject.save();

    return NextResponse.json(newProject, { status: 201 });
  } catch (e) {
    console.error("❌ Error saving project:", e.message);
    console.error("📄 Full stack trace:", e.stack);
    return NextResponse.json(
      { message: "Error creating project", error: e.message },
      { status: 500 }
    );
  }
}


