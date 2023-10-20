/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./components/**/*.{js,vue,ts}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./app.vue",
            "./error.vue",
      ],
      theme: {
            extend: {
                  boxShadow: {
                        'xl': '0 0 10px 4px rgba(0, 0, 0, 0.3)',
                  }
            },
            container: {
                  center: true
            }
      },
      plugins: [],
};
