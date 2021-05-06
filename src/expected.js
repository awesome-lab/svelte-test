import { create_ssr_component } from "svelte/internal";

const Component = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let user = { loggedIn: false };

    function toggle() {
      user.loggedIn = !user.loggedIn;
    }

    return `${
      user.loggedIn
        ? `<button>Log out
	</button>`
        : ``
    }

${
  !user.loggedIn
    ? `<button>Log in
	</button>`
    : ``
}`;
  }
);

export default Component;
