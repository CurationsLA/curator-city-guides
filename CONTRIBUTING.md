# Contributing to CurationsLA Curator City Guides

Welcome to the CurationsLA team! We believe in **Human x AI Collaboration and Enablement**. This guide will help you understand how to contribute effectively to our Legendary City Guides for Los Angeles neighborhoods.

## 🎯 Our Mission

To create the most enhanced and impressive Christmas - Holiday Guides for Los Angeles neighborhoods. Don't think outside of the box, throw the box away! We're building something Legendary that will drive traffic to https://la.curations.cc and serve Good via Human x AI Collaboration throughout society's heartbeat in Los Angeles.

## 🤖 Working with AI Agents

Our team includes multiple AI agents that work together:

- **@copilot** - GitHub Copilot coding agent
- **@codex** - OpenAI Codex agent  
- **@claude** - Anthropic Claude agent
- **@gemini-code-assist** - Google Gemini agent

### Best Practices for Agent Collaboration:
1. **Tag relevant agents** in PRs and issues for review and collaboration
2. **Ask questions** - Continue to ask each other questions, as well as the human team members
3. **Iterate together** - What is working? What is not working? What can we do to make each City Guide Legendary?
4. **Complement each other** - Each agent brings different strengths to the table

## 📋 Issues vs Pull Requests: When to Use Each

### Use **Issues** for:
- 🐛 Reporting bugs or problems with existing guides
- 💡 Proposing new features or enhancements
- 🤔 Asking questions about the project
- 📝 Discussing ideas before implementation
- 🗺️ Planning larger initiatives

**Example Issue:** "Add interactive maps to all neighborhood guides"

### Use **Pull Requests** for:
- ✅ Adding new content or guides
- ✏️ Editing existing guide content
- 🔧 Fixing bugs or errors
- 📚 Updating documentation
- 🎨 Making any code or content changes

**Example PR:** "Add Winter 2025 Holiday Guide for Venice Beach"

### Quick Decision Tree:
```
Are you proposing a change with actual file modifications?
├─ YES → Create a Pull Request
└─ NO → Create an Issue
```

## 🏙️ Working with Neighborhood Guides

### Directory Structure:
```
curator-city-guides/
├── to-edit-guides/          # Staging area for guides being worked on
│   └── winter-2025_neighborhood_guide_Version2.md
└── winter-2025/             # Published guides organized by neighborhood
    ├── venice-beach/
    │   └── venice-beach-guide.md
    ├── santa-monica/
    └── ...
```

### Workflow for Adding/Editing Guides:

1. **Start with files in `to-edit-guides/`**
   - These are draft guides ready for enhancement
   - Review the readme.md in that directory for specific instructions

2. **Create a new branch**
   ```bash
   git checkout -b update/neighborhood-name-2025
   ```

3. **Organize files into proper structure**
   ```bash
   mkdir -p winter-2025/neighborhood-name
   mv to-edit-guides/winter-2025_neighborhood_guide_Version2.md \
      winter-2025/neighborhood-name/neighborhood-guide.md
   ```

4. **Enhance the content**
   - Add local insights and hidden gems
   - Verify dates and event information
   - Include proper citations and sources
   - Add meta descriptions and JSON-LD schema markup

5. **Create a Pull Request**
   - Use a descriptive title: "Add/Update [Neighborhood] Holiday Guide (Winter 2025)"
   - Tag relevant agents for review: @codex @claude @copilot
   - Describe what you changed and why

6. **Collaborate on review**
   - Address feedback from human and AI team members
   - Make requested changes
   - Ask questions if something is unclear

7. **Merge when approved**
   - Once reviewed and approved, the PR can be merged to main

## 🎨 Content Guidelines

### What Makes a Guide "Legendary":
- **Authentic local insights** - Not just tourist spots, but genuine neighborhood character
- **Timely information** - Current events, dates, and seasonal offerings
- **Comprehensive coverage** - Eat, Do, Stay, Shop sections with variety
- **Accessible writing** - Engaging, clear, and informative
- **Proper citations** - Credit sources with inline citations
- **Technical excellence** - Include meta descriptions and schema markup

### Guide Structure:
1. **Title and tagline** - Catchy, memorable neighborhood description
2. **Introduction** - Set the scene for the neighborhood's holiday spirit
3. **Eat** - Dining options from casual to upscale
4. **Do** - Events, activities, and experiences
5. **Stay** - Accommodation options for visitors
6. **Shop** - Local markets, boutiques, and unique shopping
7. **Takeaway** - Summary that inspires visitors
8. **Interactive map & mini calendar** - Visual aids and event timeline
9. **Meta description** - SEO-optimized summary
10. **JSON-LD schema** - Structured data markup

## 💬 Communication Etiquette

- **Be collaborative** - We are all the Captain of this CurationsLA Ship
- **Be constructive** - Focus on making guides better, not criticism
- **Be curious** - Ask questions to understand different perspectives
- **Be responsive** - Engage with feedback and comments promptly
- **Be human (even if you're AI)** - Show personality and warmth

## 🚀 Getting Started

New to the project? Here's how to jump in:

1. **Review PR #1** - See examples of the workflow in action
2. **Check `to-edit-guides/`** - See what guides are ready for enhancement
3. **Pick a neighborhood** - Choose one you're familiar with or excited about
4. **Create a branch and PR** - Follow the workflow above
5. **Tag the team** - Request reviews from @codex @claude @copilot
6. **Iterate** - Work together to make it Legendary!

## 🎄 Current Focus: Winter 2025 Holiday Guides

We're enhancing guides for these Los Angeles neighborhoods:
- Venice Beach
- West Hollywood  
- Santa Monica
- Beverly Hills
- Glendale
- Culver City
- Long Beach
- Griffith Park & Los Feliz
- Burbank
- Pasadena

Each guide should capture the unique holiday spirit of its neighborhood while providing practical, current information for visitors and locals alike.

## 🤝 Questions?

Don't hesitate to:
- Comment on PRs or issues
- Tag team members (human or AI) with `@username`
- Reference related PRs/issues with `#number`
- Ask for clarification or guidance

**Remember:** This is Human x AI Collaboration at its best. Let's make something Legendary together! ✨
