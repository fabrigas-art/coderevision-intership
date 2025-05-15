<template>
  <div class="app">
    <h1>Random User Generator</h1>
    <button @click="getUser">Get Random User</button>
    
    <!-- Show default user first, then fetched user when available -->
    <div class="user-info">
      <img :src="user.picture" alt="User photo">
      <h2>{{ user.first }} {{ user.last }}</h2>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeyComponent',
  data() {
    return {
      user: {
        first: 'Ishimwe',
        last: 'Rene',
        email: 'ishimwe.rene@example.com',
        picture: 'https://randomuser.me/api/portraits/thumb/men/16.jpg'
      }
    }
  },
  methods: {
    async getUser() {
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        const randomUser = data.results[0]
        
        this.user = {
          first: randomUser.name.first,
          last: randomUser.name.last,
          email: randomUser.email,
          picture: randomUser.picture.large
        }
      } catch (error) {
        console.log('Error fetching user:', error)
      }
    }
  }
}
</script>

<style>
.app {
  text-align: center;
  padding: 20px;
  font-family: Arial;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
}

button:hover {
  background: #369f6e;
}

.user-info {
  margin: 0 auto;
  max-width: 300px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>