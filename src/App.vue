<template>
  <header>
    <img class="logo" src="./assets/logo.svg" alt="Logo" />
    <div id="nav">
      <ul class="nav__links">
        <li class="nav__link"><router-link to="/">Home</router-link></li>
        <li class="nav__link"><router-link to="/about">About</router-link></li>
        <li class="nav__link">
          <router-link to="/projects">Projects</router-link>
        </li>
      </ul>
    </div>
    <button class="contact">Contact</button>
  </header>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background-color: #242524;
}

li,
a,
button {
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
}

.contact {
  padding: 9px 25px;
  border: 1px solid #edf0f1;
  border-radius: 50px;
  transition: all 0.3s ease 0s;
}

.contact:hover {
  cursor: pointer;
  border-color: #5dcfad;
  color: #5dcfad;
}

.logo {
  cursor: pointer;
}

.nav__links {
  list-style: none;
}

.nav__link {
  display: inline-block;
  padding: 0px 20px;
}

.nav__link a {
  transition: all 0.3s ease 0s;
}

.nav__link a:hover {
  color: #5dcfad;
  padding-bottom: 10px;
  border-bottom: 1px solid #5dcfad;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

.logo {
  height: 40px;
  width: 40px;
}

@media screen and (max-width: 800px) {
  header {
    flex-direction: column;
  }

  .logo {
    margin-bottom: 20px;
  }

  .nav__links {
    margin-bottom: 20px;
  }
}
</style>
