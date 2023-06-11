import { Timestamp, addDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from 'src/services'

export const useBanners = () => {
  const collection = 'banners'

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
      const q = query(collection(db, collection), orderBy('created', 'desc'))
      onSnapshot(q, ({ docs }) => {
        const DATA = []
        docs.forEach((doc) => DATA.push({ id: doc.id, ...doc.data() }))
        return DATA
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    create,
    readall,
  }
}