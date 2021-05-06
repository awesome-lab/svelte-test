<script>
  export let app = "world";

  import { slide } from "svelte/transition";

  import UserInfo from "./UserInfo.svelte";
  import Box from "./Box.svelte";
  import displayInfoMessage from "./Box.svelte";

  import Square from "./square.svelte";

  import City from "./City.svelte";
  import StarWars from "./Starwars.svelte";
  import Name from "./Name.svelte";

  import Counter from "./Counter.svelte";
  import LoadingBar from "./LoadingBar.svelte";

  let user = {
    name: "laurent",
    surname: "louk",
  };
</script>

<main>
  {@debug displayInfoMessage}
  {#if displayInfoMessage}
    <h1 transition:slide={{ durration: 5000 }} for="name">OMG you clicked</h1>
  {:else}
    <h1>Hello {app}!</h1>
  {/if}
  <UserInfo {...user} />
  <StarWars />
  <Box>
    <h1 slot="header">hello</h1>
    <span slot="article">sport stuff</span>
    <footer slot="footer">cgu stuff</footer>
  </Box>
  <Square class="spaceup" />
</main>

<div class="spaceup">
  <City />
</div>

<div class="spaceup">
  <Name />
</div>

<div class="spaceup">
  <Counter />
</div>

<div class="spaceup">
  <LoadingBar />
</div>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .spaceup {
    margin-top: 100px;
  }

  h1 {
    color: powderblue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 200;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
