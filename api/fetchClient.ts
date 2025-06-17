export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  baseUrl?: string;
}

export const fetchClient = async <T = any>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  const {
    method = "GET",
    params,
    headers = {},
    baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "",
    ...rest
  } = options;

  const fullUrl = buildUrl(`${baseUrl}${url}`, params);

  const res = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers,
    },
    ...rest,
  });

  if (!res.ok) {
    const errorBody = await safeJson(res);
    throw new Error(
      errorBody?.message || `Fetch error: ${res.status} ${res.statusText}`
    );
  }

  return safeJson(res);
};

const buildUrl = (
  url: string,
  params?: Record<string, string | number | boolean>
): string => {
  if (!params) return url;

  const query = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {} as Record<string, string>)
  );

  return `${url}?${query.toString()}`;
};

const safeJson = async (res: Response) => {
  try {
    return await res.json();
  } catch {
    return null;
  }
};
