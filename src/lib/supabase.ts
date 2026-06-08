import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Browser-side client. Only the public anon key is exposed here — RLS on the
// `leads` table allows anon INSERT only (no read/update/delete).
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Guard so a missing env var doesn't crash the whole page on load.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null
