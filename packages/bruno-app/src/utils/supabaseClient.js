import { createClient } from '@supabase/supabase-js';

const supabaseUrl
  = (typeof process !== 'undefined' && process.env && process.env.REACT_APP_SUPABASE_URL)
    || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_URL)
    || 'https://nbqbssjgmwqybxeplrgd.supabase.co';

const supabaseAnonKey
  = (typeof process !== 'undefined' && process.env && process.env.REACT_APP_SUPABASE_ANON_KEY)
    || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_ANON_KEY)
    || 'sb_publishable_NauhEnxg7SLxuaBH9ygq6w_mz3TKmic';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});
