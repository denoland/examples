<template>
  <div id="unused">
    <h1>Unused Component</h1>

    <p>
      This component is never referenced by any other component, so we don't
      waste our time to parse it or build it into the build.js file.
    </p>
  </div>
</template>

<script>
export default {
  name: 'unused',
};
</script>

<style>
#unused {
  background-color: chartreuse;
}
</style>
