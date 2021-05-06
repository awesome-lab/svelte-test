<script>
  import { tweened } from "svelte/motion";
  import { bounceInOut } from "svelte/easing";

  const progress = tweened(0, {
    duration: 5000,
    easing: bounceInOut,
  });

  const simpleProgress = tweened(0, {
    duration: 2000,
  });
</script>

<h1>Installing Windows 95...</h1>
<h3>Bouncing</h3>
<progress value={$progress} />
<h3>regular</h3>
<progress value={$simpleProgress} />
<sub>2 weeks remaining...</sub>

<button
  on:click={() => {
    progress.set(0);
    simpleProgress.set(0);
  }}>0%</button
>
<button
  on:click={() => {
    progress.set(0.75);
    simpleProgress.set(0.75);
  }}>75%</button
>
<button
  on:click={() => {
    progress.set(1.0);
    simpleProgress.set(1.0);
  }}>100%</button
>

{#if $progress === 1.0}
  <h1>Windows 95 installed, hooray!</h1>
{/if}

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
