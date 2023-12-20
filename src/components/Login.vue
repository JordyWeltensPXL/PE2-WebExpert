<template>
  <div class="login">
    <p class="login__headline">Log in to your <span class="login__headline__span">Soundcrate</span> account</p>
    <form class="login__emailForm" action="">
      <label class="login__emailForm__label" for="email">Email</label>
      <input class="login__emailForm__input" type="email" placeholder="Your email address" v-model="email">
    </form>
    <form class="login__passwordForm" action="">
      <label class="login__passwordForm__label" for="password">Password</label>
      <input class="login__passwordForm__input" type="password" placeholder="Your password" v-model="password">
    </form>
    <button class="login__signIn" @click="login">Sign In</button>
    <div class="login__noAccount">
      <p class="login__noAccount__text">Don't have an account?</p>
      <a class="login__noAccount__signUp" href="#">Sign up</a>
    </div>
    <a href="#" class="login__forgotPassword">Forgot your password?</a>
  </div>
</template>

<script>
import usersData from "@/users.json"; // Import the JSON data
import { useAuthStore } from '@/stores/auth'; // Adjust the path accordingly

export default {
  data() {
    return {
      email: '',
      password: '',
      users: usersData,
    };
  },
  methods: {
    login() {
  const users = this.users;
  const match = users.find(user => user.email === this.email && user.password === this.password);
  
  if (match) {
    const authStore = useAuthStore();
    authStore.login();
    alert('Logged in successfully!');
  } else {
    alert('Invalid email or password!');
  }
}
  }
};
</script>

<style>
</style>
