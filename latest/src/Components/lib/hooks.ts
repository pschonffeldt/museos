import { BASE_API_URL, SUPABASE_ANON_KEY } from "./constants";

const fetchFirstMuseo = async () => {
  const response = await fetch(`${BASE_API_URL}?select=*&limit=1`, {
    method: "GET",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=representation",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch data");
  }

  return await response.json();
};
