<script>
  let name;

  function handleInput(event) {
    name = event.target.value;
  }

  function handleClick() {
    alert(`Hello ${name}`);
  }
</script>

<h1>Introduce yourself:</h1>
<input type="text" on:change={handleInput} />
<button on:click|preventDefault|once={handleClick}>Click me</button>
