<template>
  <div class="login">
    <p class="login__headline">Log in to your <span class="login__headline__span">Soundcrate</span> account</p>
    <form class="login__emailForm" action="">
      <label class="login__emailForm__label" for="email">Email</label>
      <input class="login__emailForm__input" type="email" placeholder="Your email adress" key="email">
    </form>
    <form class="login__passwordForm" action="">
      <label class="login__passwordForm__label" for="password">Password</label>
      <input class="login__passwordForm__input" type="password" placeholder="Your password" key="password">
    </form>
    <button class="login__signIn">Sign In</button>
    <div class="login__noAccount">
      <p class="login__noAccount__text">Don't have an account?</p>
      <a class="login__noAccount__signUp" href="#">Sign up</a>
    </div>
    <a href="#" class="login__forgotPassword">Forgot your password?</a>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>