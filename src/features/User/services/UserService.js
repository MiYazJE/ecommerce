import axios from 'axios'
import { BASE_API_URL } from 'common/constants/paths'

export default class UserService {
  async signIn({ username, password }) {
    const { data: users } = await axios.get(`${BASE_API_URL}/users`)

    const userExists = users.find(
      (user) => user.username === username && password === password
    )

    if (!userExists) {
      throw new Error('Username or password are incorrects.')
    }
  }

  async signUp({ username, password }) {
    await axios.post(`${BASE_API_URL}/users`, {
      username,
      password
    })
  }
}
