import axios from 'axios'

export default class UserService {
  async signIn({ username, password }) {
    const { data: users } = await axios.get(`/users`)

    const userExists = users.find(
      (user) => user.username === username && user.password === password
    )

    if (!userExists) {
      throw new Error('Username or password are incorrects.')
    }
  }

  async signUp({ username, password }) {
    await axios.post(`/users`, {
      username,
      password
    })
  }
}
