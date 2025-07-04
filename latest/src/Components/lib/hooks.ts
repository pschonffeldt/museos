// src/lib/hooks.ts
import { BASE_API_URL, SUPABASE_ANON_KEY } from "./constants";

export type Museo = {
  museum_name: string;
  museum_country: string;
  museum_city: string;
  museum_municipality?: string;
  museum_ownership_type?: string;
  museum_opening_hours?: string;
};

/**
 * Fetch only the museo whose museum_name exactly matches `name`.
 */
export async function fetchMuseosByName(name: string): Promise<Museo[]> {
  const encoded = encodeURIComponent(name);
  const res = await fetch(
    `${BASE_API_URL}?select=*&museum_name=eq.${encoded}`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase error: ${text}`);
  }
  return res.json();
}
