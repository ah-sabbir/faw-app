import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises'

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5

export const POST = async(request:NextRequest) => {

    const data = await request.formData()
    const file: File | null = data.get('image') as unknown as File
  
    if (!file) {
      return NextResponse.json({ success: false, message: 'No image uploaded' })
    }
  
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = file.name.replace(/ /g, '_')
    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = `public/static/images/${fileName}`
    await writeFile(path, buffer)

    // console.log(`open ${path} to see the uploaded file`)


  return NextResponse.json({
        ok: true,
        message: "success",
        url: `static/images/`+fileName, //http://localhost:3000/burger-3047541_1280.31f26184.jpg&w=640&q=75
      });
}