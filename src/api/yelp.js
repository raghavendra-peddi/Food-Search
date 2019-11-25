import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer _ZzzxVL5lufW5oX7z_eRSiq7C0Ks4fr5tKs7PYuQTD3yDtFkTZDBz54TkwJzqL4iNUBnBJNNXaKNWwxKDv8FR3Q41YvBd7f4H4BFJfqkOgsgAJaBOBMYkQqjDSXaXXYx'
  }
})