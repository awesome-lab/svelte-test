<script>
  import { onDestroy } from "svelte";
  import { store } from "./store";

  import Setter from "./Setter.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Incrementer from "./Incrementer.svelte";

  let countValue;

  const unsubscribe = store.subscribe((value) => (countValue = value));
  onDestroy(unsubscribe);
</script>

<h1>The count is {countValue}</h1>
<h1>count with destroy built in {$store}</h1>

<Incrementer />
<Decrementer />
<Setter />
