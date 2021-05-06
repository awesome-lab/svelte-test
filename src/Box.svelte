<script>
  import { slide } from "svelte/transition";

  export let displayInfoMessage = false;
</script>

<div class="box">
  <header>
    <slot name="header"><span>no title provided</span></slot>
  </header>
  <article>
    <slot name="article"><span>no description provided</span></slot>
  </article>
  <br />
  <from>
    <div class="name-field">
      <label for="name">Name:</label>
      <input type="text" name="name" />
    </div>
    <div class="surname-field">
      <label for="surname">Surname:</label>
      <input type="text" name="surname" />
    </div>
    <label>
      <input type="checkbox" bind:checked={displayInfoMessage} />
      Do you want to use Svelte ?
    </label>
  </from>
  <br />
  <footer>
    <slot name="footer">cgu</slot>
  </footer>
</div>

{#if displayInfoMessage}
  <h1 transition:slide={{ durration: 5000 }} for="name">OMG you clicked</h1>
{/if}

<style>
  .box {
    width: 300px;
    border: 2px solid #aaa;
    border-radius: 40px;
    padding: 2rem;
    background: white;
  }
</style>
