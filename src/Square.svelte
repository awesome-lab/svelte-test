<script>
  let count = 0;
  $: squared = count ** 2;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>Counter: {count}</button>
<h1>Square of the counter is {squared}</h1>
