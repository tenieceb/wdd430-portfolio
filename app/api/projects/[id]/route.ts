import {getProjectById} from '@/lib/projects-db';
import {NextRequest, NextResponse} from 'next/server';

export async function GET(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
    const { id: idString } = await params;
    const id = parseInt(idString, 10);

    if (Number.isNaN(id)) {
        return NextResponse.json({error: 'Invalid project ID'}, {status: 400});
    }
    
    const project = await getProjectById(id);

    if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
}