import { useCallback } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function useApi() {
  const httpGet = useCallback(async (path: string) => {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const urlFull = `${baseURL}${uri}`;

    const response = await fetch(urlFull);
    return convertJson(response);
  }, []);

  const httpPost = useCallback(async (path: string, body?: any) => {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const urlFull = `${baseURL}${uri}`;

    const response = await fetch(urlFull, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null,
    });
    return convertJson(response);
  }, []);

  async function convertJson(response: Response) {
    let content;
    try {
      content = await response.json();
    } catch (error) {
      if (!response.ok) {
        throw new Error(`an unexpected error occurred ${response.status}`);
      }
      return null;
    }
    if (!response.ok) throw content;
    return content;
  }

  return { httpGet, httpPost };
}
