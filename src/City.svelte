<script>
  let cities = [
    { id: "123", name: "Paris" },
    { id: "321", name: "London" },
    { id: "331", name: "NY" },
  ];
</script>

<h1>Cities list</h1>
<ul>
  {#each cities as { id, name }, index}
    <li>{index + 1}: {name} (id: {id})</li>
  {/each}
</ul>
