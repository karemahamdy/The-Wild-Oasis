
import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://tlkyzpirifkgkmylfzwd.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
