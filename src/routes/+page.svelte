<script>
	import WcsWrapper from './../lib/components/WcsWrapper.svelte';
  import WcsAllitems from '../lib/components/WcsAllitems.svelte';
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
      try {
        const itemLanguage = item.Language ? item.Language.toLowerCase() : '';
        const type = item.type;
        const richText =item[type].rich_text[0].plain_text
        const body = richText ? richText : '';
        return itemLanguage === language_value;
      } catch (error) {
        console.log(error)
        return { itemLanguage: error.message };
      }
    }).map((item) => {
      try {
        const id = item.id;
        const type = item.type;
        const body = item[type].rich_text[0].plain_text;
        return {
          Lang: language,
          body: body,
          type: type,
          id: id,
        };
      } catch (error) {
        console.log(error)
        return { body: error.message }
      } 
    });
    return items;
  }).filter((items) => items.length > 0);

  // function updateLang (newValue) {
  //   language.set(newValue)
  //   console.log(language)
  // }
</script>

<section>
  <h1>Join our WCS community!</h1>
</section>

<!-- <button on:click={updateLang('English')}>English</button>
<button on:click={updateLang('Norsk')}>Norsk</button> -->
<WcsWrapper>
  <WcsAllitems items={myItems} />
</WcsWrapper>

<style>
  section {
    position: relative;
    height: 25rem;
    display: grid;
    place-content: center;
    background-image: url(../lib/components/assets/Backdrop.webp);
    background-position: center center;
    background-size: cover;
  }
  section h1 {
    z-index: 3;
  }
  section::after {
    position: absolute;
    content: '';
    inset: 0;
    z-index: 1;
    background-color: rgba(16, 13, 68, 0.5);
    background-blend-mode: multiply;
    backdrop-filter: blur(3px);
  }

</style>