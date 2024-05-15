import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <>
      <h1>Heroes SPA</h1>
      <hr />

        
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
