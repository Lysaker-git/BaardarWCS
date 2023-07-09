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
  console.log(myItems[1])

  // function updateLang (newValue) {
  //   language.set(newValue)
  //   console.log(language)
  // }
</script>


<h1>Hello</h1>

<!-- <button on:click={updateLang('English')}>English</button>
<button on:click={updateLang('Norsk')}>Norsk</button> -->

{#await myItems}
	<progress></progress>
{:then myItems}
  <div class="grid">
    <div>
      <section>
          {#each myItems as item}
            <article>
            {#each item as i}
                {#if i.type.toLowerCase().includes('heading')}
                  <h2>{i.body}</h2>
                {:else if i.type.toLowerCase().includes('paragraph')}
                  <p>{i.body}</p>
                  <a href='/classes?id={i.id}' role='button' class='secondary'>Read More</a>
                {/if}
                {/each}
            </article>
          {/each}
      </section>
    </div>
  </div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}