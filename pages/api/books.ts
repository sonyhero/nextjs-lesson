// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = BooksDBType[]

type BooksDBType = {
  id: number
  title: string
}

const booksDB = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'name2' },
  { id: 3, title: 'title3' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    let books = booksDB
    const term = req.query.term as string
    if (term) {
      books = books.filter((book) => book.title.toLowerCase().includes(term.toString()))
    }
    res.status(200).json(books)
  }
}
