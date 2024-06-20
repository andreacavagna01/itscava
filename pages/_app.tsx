import 'styles/globals.css';
import 'styles/codeblocks.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useSupabase } from '@/hooks/useSupabase';

function MyApp({ Component, pageProps }: AppProps) {
  const { session, supabaseClient } = useSupabase();
  return (
      <ThemeProvider attribute="class">
        <Component session={session} supabase={supabaseClient} {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
