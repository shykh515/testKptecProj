import { AppState } from 'react-native'

import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = 'https://umduxtclmdworycltcft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZHV4dGNsbWR3b3J5Y2x0Y2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MzY5MzEsImV4cCI6MjAyMTUxMjkzMX0.vDeMwENHpRDuqZRKd2PMe78tlEaZZTNJ-pYUmAhJ1Zg';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZHV4dGNsbWR3b3J5Y2x0Y2Z0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTkzNjkzMSwiZXhwIjoyMDIxNTEyOTMxfQ.r1tCyvgXYKBQO_yRvqUaf_k9sK2prAuJmuN2dGiL-lg'




export const supabase = createClient(supabaseUrl, SERVICE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })