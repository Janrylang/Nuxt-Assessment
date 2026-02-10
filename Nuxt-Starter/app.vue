<template>
  <div id="app">
    <header>
      <nav>
        <NuxtLink to="/">Product Store</NuxtLink>
        <CartSummary />
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f5f5;
  color: #333;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
}

header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
}

header nav a {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
  text-decoration: none;
}

main {
  padding-bottom: 48px;
}
</style>
