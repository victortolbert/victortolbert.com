const isLoggedIn = ref(false)

export default function useUser() {
  const login = () => {
    isLoggedIn.value = true
  }

  return {
    isLoggedIn,
    login,
  }
}
