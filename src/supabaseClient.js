// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jvruhstbelqikpsemven.supabase.co'; // Substitua pelo URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cnVoc3RiZWxxaWtwc2VtdmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MzIwMDksImV4cCI6MjA1NDUwODAwOX0.IoeSSjEuQAw07ZuzVl1y7Q6gsxKrXiI-xCRWR4OOcW4'

export const supabase = createClient(supabaseUrl, supabaseKey);
