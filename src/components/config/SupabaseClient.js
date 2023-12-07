import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY } from '@env';


export const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})