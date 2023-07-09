<script>
  import { writable } from 'svelte/store';
  const language = writable('norsk');
  let language_value;
  language.subscribe((value) => {
    language_value = value;
  })
  
  export let data;
  const posts = data.items;
  let myItems = posts.map((post) => {
    let items = post.filter((item) => {
      const itemLanguage = item.Language ? item.Language.toLowerCase() : '';
      const type = item.type;
      const body = item[type].rich_text[0].plain_text;
      return itemLanguage === language_value;
    }).map((item) => {
      const type = item.type;
      const body = item[type].rich_text[0].plain_text;
      return {
        Lang: language,
        body: body,
        type: type
      };
    });
    return items;
  });
  myItems.pop();
  const finalItems = myItems[0]

  // function updateLang (newValue) {
  //   language.set(newValue)
  //   console.log(language)
  // }
</script>

<h1>Hello</h1>

<!-- <button on:click={updateLang('English')}>English</button>
<button on:click={updateLang('Norsk')}>Norsk</button> -->

{#each finalItems as item}
  {#if item.type.toLowerCase().includes('heading')}
    <h2>{item.body}</h2>
  {:else if item.type.toLowerCase().includes('paragraph')}
    <p>{item.body}</p>
  {/if}
{/each}