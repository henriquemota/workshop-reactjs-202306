import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from 'src/services'


export const useAuth = () => {

  const create = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {

      const errorCode = error.code
      const errorMessage = error.message
    }
  }
  const signin = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)

    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
    }
  }
  const signout = async () => {
    try {
      await signOut(auth)
    } catch (error) {

    }
  }

  return {
    create,
    signin,
    signout,
  }
}