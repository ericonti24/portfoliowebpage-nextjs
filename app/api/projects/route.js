import { NextResponse } from 'next/server'
// import projects from './data.json'
import {PROJECTS} from '../data/data.js'

export async function GET(request) {
    return NextResponse.json(PROJECTS)
}