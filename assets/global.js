  const supabaseUrl = 'https://wsfmpehdgmhooduvzepx.supabase.co';
  const supabaseKey = 'sb_publishable_eNWQnaaY8tgyR_kM0SC8dA_d1BNlcVI';
 
  const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

  export function getSupabaseClient() {
    return supabaseClient;
  }