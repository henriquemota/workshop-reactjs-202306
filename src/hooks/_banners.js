import { Timestamp, addDoc, collection, onSnapshot } from 'firebase/firestore'
import { db } from 'src/services'

export const useBanners = () => {
  const ref = collection(db, 'banners')

  const create = async (params) => {
    try {
      await addDoc(collection(db, collection), {
        ...params,
        created: Timestamp.now()
      })
    } catch (error) {
      console.log(error)
    }
  }
  const readall = async () => {
    try {
      const DATA = []
      onSnapshot(ref, ({ docs }) => {
        docs.forEach((doc) => DATA.push({ id: doc.id, ...doc.data() }))
      })
      return DATA
    } catch (error) {
      console.log(error)
    }
  }

  return {
    create,
    readall,
  }
}