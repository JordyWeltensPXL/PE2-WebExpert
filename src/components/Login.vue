<template>
  <div v-if="!loggedIn">
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
  </div>
  <div v-else>
    <div class="loggedIn">
      <p class="loggedIn__title">Login succesful.</p>
      <p class="loggedIn__welcome">Welcome to soundcrate.<br><br>Discover the essence of music authenticity with our hand-signed
        albums. Each one is a collector's gem, a tangible connection
        to the artists you love.</p>
      <button @click="logout()" class="loggedIn__button">Logout</button>
    </div>
  </div>
  
</template>

<script>
import usersData from "@/users.json";
import { useAuthStore } from '@/stores/auth';
import router from '@/router/index';

export default {
  data() {
    return {
      email: '',
      password: '',
      users: usersData,
      authStore: useAuthStore()
    };
  },
  computed: {
    loggedIn() {
      return this.authStore.isLoggedIn;
    },
    currentUser() {
      return this.authStore.currentUser;
    }
  },
  methods: {
    login() {
      const match = this.users.find(user => user.email === this.email && user.password === this.password);
      
      if (match) {
        this.authStore.login(match); // Use the store instance
        router.push({ name: 'cart' });
      } else {
        alert('Invalid email or password!');
      }
    },
logout() {
    this.authStore.logout();
    },
  }
};
</script>

<style>
</style>
