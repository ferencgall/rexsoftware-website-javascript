const searchClient = algoliasearch('JV9Y0EKVBB', '924c91304a4d362b7f5f82d3d18c9268');

  const search = instantsearch({
    indexName: 'resources',
    searchClient,
    searchFunction(helper) {
      if (helper.state.query === '') {
        return; // Prevents initial search
      }
      helper.search();
    },
  });

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      showReset: true, // Optional: Hides the reset button when the search box is empty
      autofocus: false, // Prevents autofocus on the search box
      placeholder: 'Search...',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 5, // Limit the number of hits displayed to 5
      templates: {
        item(hit) {
          const title = instantsearch.highlight({ attribute: 'name', hit });
          const excerpt = hit.excerpt && hit.excerpt !== 'Not provided' ? `<p class="excerpt-class">${hit.excerpt}</p>` : '';
          return `
            <a href="/articles/${hit.slug}" style="text-decoration: none; color: inherit;">
              <article>
                <p class="heading-small">${title}</p>
                ${excerpt}
                <div class="tags_wrapper"><a href="#" class="tag w-inline-block"><div class="tag-wrapper"><div class="tag-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.705 6.29L6.205 1.79C6.025 1.61 5.775 1.5 5.5 1.5H2C1.45 1.5 1 1.95 1 2.5V6C1 6.275 1.11 6.525 1.295 6.71L5.795 11.21C5.975 11.39 6.225 11.5 6.5 11.5C6.775 11.5 7.025 11.39 7.205 11.205L10.705 7.705C10.89 7.525 11 7.275 11 7C11 6.725 10.885 6.47 10.705 6.29ZM2.75 4C2.335 4 2 3.665 2 3.25C2 2.835 2.335 2.5 2.75 2.5C3.165 2.5 3.5 2.835 3.5 3.25C3.5 3.665 3.165 4 2.75 4ZM6.5 10.27L8.635 8.135C8.86 7.91 9 7.595 9 7.25C9 6.56 8.44 6 7.75 6C7.405 6 7.09 6.14 6.865 6.365L6.5 6.73L6.135 6.37C5.91 6.14 5.595 6 5.25 6C4.56 6 4 6.56 4 7.25C4 7.595 4.14 7.905 4.365 8.135L6.5 10.27Z" fill="currentColor"></path>
  </svg></div><div class="tag-text">${hit.category}</div></div></a></div>
              </article>
            </a>
          `;
        },
      },
    }),
    instantsearch.widgets.stats({
        container: '#results-count-text',
        templates: {
            text: 'View all <strong>{{nbHits}} results</strong>'
        }
    })
  ]);

  search.start();

  // Add event listener to show #search-footer when user starts typing
  document.querySelector('#searchbox input').addEventListener('input', function() {
    const footerElement = document.getElementById('search-footer');
    if (this.value.trim() !== '') {
      footerElement.style.display = 'block';
    } else {
      footerElement.style.display = 'none';
    }
  });

  // Add event listener to redirect user when they click on "View all results"
  document.getElementById('results-count-text').addEventListener('click', function() {
    const query = document.querySelector('#searchbox input').value;
    window.location.href = `https://rexsoftware.com/search?query=${encodeURIComponent(query)}`;
  });
