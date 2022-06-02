<template>
  <div>
    <h1>Deno x Vue3</h1>
    <p>
      This is a starter Vue3 app running on
      <a href="https://deno.land/" target="_blank">Deno</a>.
    </p>
    <h2>Install</h2>
    <p>
      You can scaffold this sample app on your local machine with the
      following command:
      <pre>
        $ deno run --allow-write --allow-net
        https://raw.githubusercontent.com/denoland/examples/main/init.ts
        with-vue3 ./path/to/directory
      </pre>
    </p>
    <h2>Other Resources</h2>
    <ul>
      <li>
        <a
          href="/getting-started"
          target="_blank"
        >
          Quickstart Guide
        </a>
      </li>
      <li>
        <a
          href="https://github.com/denoland/examples/tree/main/with-vue3"
          target="_blank"
        >
          Source on GitHub
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
