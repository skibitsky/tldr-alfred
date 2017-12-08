'use strict';

const alfy = require('alfy');
const { parse } = require('tldr/lib/parser');

const tokens = alfy.input.split(' ');
const [command, ...search] = tokens;

const url = `https://api.github.com/repos/tldr-pages/tldr/contents/pages/common/${command}.md?ref=master`;

alfy
  .fetch(url)
  .then(({ content, encoding }) => {
    const markdown = new Buffer(content, encoding).toString('ascii');

    const { examples } = parse(markdown);
    const filteredExamples = alfy.matches(search.join(' '), examples, 'code');

    alfy.output(
      filteredExamples.map(example => ({
        title: example.code,
        subtitle: example.description,
        text: {
          copy: example.code,
          largetype: markdown
        }
      }))
    );
  })
  .catch(error => {
    if (error.statusCode === 403) {
      alfy.output({
        title:
          "You're probably over your rate limit. Slow down and try again later"
      });
    } else if (error.statusCode === 404) {
      alfy.output({
        title: 'Command not found'
      });
    } else {
      throw error;
    }
  });
