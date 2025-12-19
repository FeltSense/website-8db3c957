import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {
  try {
    // Get environment variables with proper fallbacks
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase not configured. Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body = await request.json();
    const { formId, formData, userAgent } = body;

    // Get project and founder IDs from environment
    const projectId = process.env.PROJECT_ID;
    const founderId = process.env.FOUNDER_ID;

    if (!projectId) {
      console.error('PROJECT_ID not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Insert form submission into Supabase (form_submissions table)
    const { data, error } = await supabase
      .from('form_submissions')
      .insert({
        project_id: projectId,
        founder_id: founderId || null,
        form_id: formId || 'contact',
        form_data: formData as Record<string, unknown>,
        user_agent: userAgent || request.headers.get('user-agent'),
        submitted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      id: data.id 
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
