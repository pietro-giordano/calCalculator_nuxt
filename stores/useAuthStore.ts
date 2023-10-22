import { defineStore } from 'pinia';
import { useApiFetch } from "~/composables/useApiFetch";

type User = {
      id: number,
      name: string,
      email: string
}

type Credentials = {
      email: string,
      password: string
}

type RegistrationInfo = {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
}

export const useAuthStore = defineStore('auth', () => {
      const user = ref<User | null>(null);
      const isLoggedIn = computed(() => !!user.value);

      async function logout() {
            await useApiFetch("/logout", { method: "POST" });
            user.value = null;
            navigateTo("/login");
      }

      async function fetchUser() {
            // destructuring di data ed error
            const { data, error } = await useApiFetch("/api/user");
            console.log(error);
            // recuperati i dati li impostiamo su user.value
            user.value = data.value as User;
      }

      async function login(credentials: Credentials) {
            // chiediamo csrf-cookie a laravel-sanctum
            await useApiFetch("/sanctum/csrf-cookie");

            // chiamata per login
            const login = await useApiFetch("/login", {
                  method: 'POST',
                  body: credentials
            });

            await fetchUser();

            // restituiamo login in modo da recuperare anche messaggi di errore
            return login;
      }

      async function register(info: RegistrationInfo) {
            await useApiFetch("/sanctum/csrf-cookie");

            const register = await useApiFetch("/register", {
                  method: "POST",
                  body: info,
            });

            await fetchUser();

            return register;
      }

      return { user, login, isLoggedIn, fetchUser, logout, register };
})
