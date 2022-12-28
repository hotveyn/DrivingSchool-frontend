// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/usage.scss" as *;'
                }
            }
        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=1200, initial-scale=1',
            title: "MyTodoList",
            link: [
                {rel: 'stylesheet', href: 'https://meyerweb.com/eric/tools/css/reset/reset200802.css'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'}
            ],
            meta: [
                {name: 'DriveSchool', content: 'DriveSchool.'}
            ],
        }
    }
})
