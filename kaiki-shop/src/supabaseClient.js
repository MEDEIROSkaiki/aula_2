import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nodniieajlrksvokbamy.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vZG5paWVhamxya3N2b2tiYW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NTAwNjYsImV4cCI6MjA3MDUyNjA2Nn0.Nqt_8Vq3mjCiGyBPymIvkDWMQ_8A0riNF-RcvM7tufQ'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);
