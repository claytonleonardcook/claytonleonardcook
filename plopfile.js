export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('atom', {
    description: 'atom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
      {
        type: 'list',
        name: 'type',
        message: 'component type',
        choices: [
          {
            name: 'Atom',
            value: 'atom',
            description: "Smallest component type, shouldn't be used directly.",
          },
          {
            name: 'Molecule',
            value: 'molecule',
            description: 'Component that uses atoms to create a more complex component.',
          },
        ],
      },
    ],
    actions: [
      (answer) => (answer.name = plop.getHelper('pascalCase')(answer.name)),
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{name}}/index.svelte',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{name}}/story.stories.svelte',
        templateFile: 'templates/story.hbs',
      },
    ],
  });
}
