# Project Overview
Sample-Letta is a basic UI for a chat interface with LLMs (Large Language Models). It provides a simple yet functional chat interface with message history display, user input, and simulated AI responses. The application is built with React 19, TypeScript, and uses Tailwind CSS with shadcn/ui components for styling. The current implementation includes mock data and simulated responses, serving as a foundation for integration with actual LLM APIs in the future.

# Code Style Guidelines
- TypeScript with React 19
- Components use functional component pattern with React.FC type annotations
- Props interfaces are defined above components (PascalCase with "Props" suffix)
- Component files export default at bottom
- CSS via Tailwind + shadcn/ui component library
- Import order: React, libraries, local components
- Error handling: Early returns for validation (`if (x) return`)
- React state via hooks (useState, etc.)
- Event handling: functions prefixed with "handle" (handleKeyDown, etc.)
- Consistent use of arrow functions for component definitions and callbacks
- Destructure props in component parameters
- Use interface for type definitions (not type aliases)
- Default props defined in destructuring with = syntax

# File Structure
- UI components in src/components/ui/
- Feature components in dedicated folders (e.g., src/components/chat/)
- Pages in src/pages/