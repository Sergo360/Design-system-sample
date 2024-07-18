# Design system sample

Used stack:
React,Storybook,TypeScript,Vite

This design system sample demonstrates what a design system could look like(according to author's opinion of course :smile:)

Main ideas:

-Maximize reusability. Сomponents containing grids containing icons... all reusable!

-Components should be very flexible. They should support any types of external customization. All classes and almost all styles (besides some crucial basics) should be replaceable

-Grids for every most used cases. We don't write same css hundreds of times.

# Architecture Guide

Below you can find rules that needs to be applied into every component to ensure that they are highly customizable, follow common format and coding standards.


Now all modules can be designed with low coupling and with their own scope of responsibility, as well as distributed across the team without conflicts during development

## File Structure

```
└── src/

    ├── components/
    |    ├── {{component-name}}
    |    |   ├──{{ComponentName}}.tsx
    |    |   ├──{{ComponentName}}.stories.tsx
    |    |   ├──{{ComponentName}}.types.ts
    |    |   ├──{{ComponentName}}.module.scss
    |    |   └──index.ts
    |    └── index.ts
    └── index.ts
    
    ├── grids/
    |    ├── {{grid-name}}
    |    |   ├──{{GridName}}.tsx
    |    |   ├──{{GridName}}.stories.tsx
    |    |   ├──{{GridName}}.types.ts
    |    |   ├──{{GridName}}.module.scss
    |    |   └──index.ts
    |    └── index.ts
    └── index.ts
    
    ├── pages/
    |    ├── {{page-name}}
    |    |   ├──{{PageName}}.tsx
    |    |   ├──{{PageName}}.stories.tsx
    |    |   ├──{{PageName}}.types.ts
    |    |   ├──{{PageName}}.module.scss
    |    |   └──index.ts
    |    └── index.ts
```