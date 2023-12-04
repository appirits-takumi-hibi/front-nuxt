export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() は、ユーザーが認証されているかどうかを確認するメソッドの例です。
  if (isAuthenticated() === false) {
    return navigateTo('/login')
  }
})