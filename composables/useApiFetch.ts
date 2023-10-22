import type { UseFetchOptions } from 'nuxt/app'
import { useRequestHeaders } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
      let headers: any = {
            accept: "application/json",        // da non dimenticare, così riceveremo json
            referer: "http://localhost:3000"  // da inoltrare sempre così laravel percepisce come dominio riconosciutohe viene dal nostro frontend, quindi da un dominio riconosciuto
      }

      // salviamo il token del cookie 
      const token = useCookie('XSRF-TOKEN');

      if (token.value) {
            headers['X-XSRF-TOKEN'] = token.value as string;
      }

      if (process.server) {
            headers = {
                  ...headers,
                  ...useRequestHeaders(["cookie"]),
            }
      }

      return useFetch("http://localhost:8000" + path, {
            credentials: "include",
            watch: false,
            ...options,
            headers: {
                  ...headers,
                  ...options?.headers
            }
      });
}