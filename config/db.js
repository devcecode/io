import mongoose from 'mongoose'

export const db = async () => {
  const uri     = process.env.DB_URL
  const options = { useNewUrlParser: true }

  try {
    await mongoose.connect(uri, options)
    console.log(`Db is connected`)
  } catch (e) {
    console.log(e.message)
  }
}