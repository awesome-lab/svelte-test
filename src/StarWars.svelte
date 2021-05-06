<script>
  import { onMount } from "svelte";
  let characters = []; // Use the Star Wars API, Luke

  onMount(async () => {
    const apiResponse = await fetch("https://swapi.dev/api/people/");
    const swPeopleJSON = await apiResponse.json();

    characters = swPeopleJSON.results;

    return () => console.log("Destroyed");
  });

  async function getRandomStarWarsCharacter() {
    const randomNumer = Math.floor(Math.random() * 10) + 1;
    const apiResponse = await fetch(
      `https://swapi.dev/api/people/${randomNumer}`
    );

    return await apiResponse.json();
  }

  let promise = getRandomStarWarsCharacter();
</script>

{#await promise}
  <h1>Loading...</h1>
{:then character}
  <h1>{character.name}</h1>
{/await}

<ul>
  {#each characters as { name, height, birth_year }}
    <li>
      <strong>{name}</strong>
      (height: {height}cm, birth year: {birth_year})
    </li>
  {:else}
    <p>Loading...</p>
  {/each}
</ul>
