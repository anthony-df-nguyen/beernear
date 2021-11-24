// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  //You can write all your code to handle both GET and POST request. As logn as the api returns a status and a json
  res.status(200).json({ name: 'John Doe' })
}
