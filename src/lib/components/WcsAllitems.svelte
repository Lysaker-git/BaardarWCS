<script>
    export let items;
</script>

{#await items}
	<progress></progress>
{:then items}
      <section>
          {#each items as item}
            <article>
              {#each item as i}
                {#if i.type.toLowerCase().includes('heading')}
                  <h3>{i.body}</h3>
                {:else if i.type.toLowerCase().includes('paragraph')}
                  {#if i.body.split(' ').length > 15}
                    <p>{i.body.split(' ').slice(0, 15).join(' ')}...</p>
                  {:else}
                    <p>{i.body}</p>
                  {/if}
                  <a href='/classes?id={i.id}' role='button' class='secondary'>Read More</a>
                {/if}
              {/each}
            </article>
          {/each}
      </section>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2rem;
    }
    section > * {
        flex: 1 1 330px;
    }
    article {
        display: flex;
        flex-direction: column;
    }
    article h3 {
        margin-bottom: auto;
    }
    article p {
        margin-top: 2rem;
    }
</style>