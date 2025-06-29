import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create clients if environment variables are available
let supabaseServer: ReturnType<typeof createClient> | null = null;
let supabaseClient: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseServiceKey) {
  // Server-side client with service role key (bypasses RLS)
  supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
} else {
  console.warn('Supabase service role environment variables not found - using fallback');
}

if (supabaseUrl && supabaseAnonKey) {
  // Client-side client for general use
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase client environment variables not found - using fallback');
}

export { supabaseServer, supabaseClient };
