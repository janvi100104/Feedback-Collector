# Contributing to FeedbackHub

First off, thank you for considering contributing to FeedbackHub! It's people like you that make FeedbackHub such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for FeedbackHub. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report**
- Check the documentation for tips on troubleshooting
- Determine which repository the bug should be reported in
- Check if the issue has already been reported

**How Do I Submit A (Good) Bug Report?**
- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if possible

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for FeedbackHub, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion**
- Check if the enhancement has already been suggested
- Determine which repository the enhancement should be suggested in

**How Do I Submit A (Good) Enhancement Suggestion?**
- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected to see instead

### Pull Requests

The process described here has several goals:
- Maintain FeedbackHub's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible FeedbackHub
- Enable a sustainable system for FeedbackHub's maintainers to review contributions

**Steps to submit a Pull Request:**
1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file based on `.env.example`
4. Run the development server with `npm run dev`

## Styleguides

### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### TypeScript Styleguide
- All TypeScript must pass `npm run lint`
- Use TypeScript strict mode
- Prefer interfaces over types for object definitions

### CSS/Sass Styleguide
- Use Tailwind CSS utility classes
- When adding custom CSS, follow the BEM methodology

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

#### Type of Issue and Issue State
- `bug` - Issues that are bugs
- `enhancement` - Issues that are feature requests
- `documentation` - Issues related to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed

Thank you for reading and contributing to FeedbackHub!