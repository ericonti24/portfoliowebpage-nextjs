import { NextResponse } from 'next/server'
import {PROJECTS} from '../data/data.js'

export async function GET(request) {
    return NextResponse.json(PROJECTS)
}