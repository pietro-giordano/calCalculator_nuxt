import { defineStore } from 'pinia';

type User = {
      id: number,
      name: string,
      email: string
}

type Credentials = {
      email: string,
      password: string
}

export const useAuthStore = defineStore('auth', () => {
      const user = ref<User | null>(null);

      async function login(credentials: Credentials) {
            // chiediamo csrf-cookie a laravel-sanctum
            await useApiFetch("/sanctum/csrf-cookie");

            // chiamata per login
            const login = await useApiFetch("/login", {
                  method: 'POST',
                  body: credentials
            });

            // salviamo in data i dati dello user
            const { data } = await useApiFetch("/api/user");
            // recuperati i dati li impostiamo su user.value
            user.value = data.value as User;

            // restituiamo login in modo da recuperare anche messaggi di errore
            return login;
      }

      return { user, login };
})
