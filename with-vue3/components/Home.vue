<template>
  <div id="home">
    <h1>Welcome to Your vno Project</h1>
    <p>
      Try spinning up your own vno project<br />
      by using our CLI tool here:<a
        href="https://github.com/jgrubb16/vnocli"
        target="_blank"
        rel="noopener"
        >Open Source CLI Tool</a
      >
    </p>
    <p>
      If you like this project, please consider taking the time to support us
      below. <br />It only takes a minute but it would mean the world to us.
    </p>
    <ul>
      <li>
        Give us a star on
        <a
          href="https://github.com/oslabs-beta/vno"
          target="_blank"
          rel="noopener"
          >GitHub</a
        >
      </li>
      <li>
        Give us some claps on
        <a href="https://medium.com/" target="_blank" rel="noopener">Medium!</a>
        (needs to be updated)
      </li>
      <li>
        Upvote us on
        <a href="https://www.producthunt.com/" target="_blank" rel="noopener"
          >Product Hunt</a
        >
        (needs to be updated)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
#home {
  color: #fff;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 60px;
  max-width: 800px;
  margin: 0 auto;
  display: table;
  padding: 20px;
  line-height: 1.4em;
}
a {
  color: #57d3af;
}
ul {
  max-width: 800px;
  text-align: left;
}
</style>
