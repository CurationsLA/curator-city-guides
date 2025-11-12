# CurationsLA Workflow Guide

This guide provides a visual walkthrough of how to work with our repository, clarifying when to use Issues vs Pull Requests.

## 🎯 Quick Reference: Issues vs Pull Requests

| Scenario | Use This | Why |
|----------|----------|-----|
| "I want to suggest adding restaurant reviews to guides" | **Issue** | Proposing a new feature without implementation |
| "I'm adding Beverly Hills holiday guide" | **Pull Request** | Making actual file changes |
| "There's a typo in the Venice Beach guide" | **Pull Request** | Making a concrete fix |
| "Should we reorganize the directory structure?" | **Issue** | Discussing before implementing |
| "I found an outdated event date" | **Pull Request** | Fixing incorrect information |
| "What if we created audio versions of guides?" | **Issue** | Exploring a new idea |

## 📊 Workflow Diagram

```
                    Have an idea or found a problem?
                                  |
                                  |
                    Does it require file changes?
                                  |
                    +-------------+-------------+
                    |                           |
                   YES                         NO
                    |                           |
                    v                           v
            Pull Request                      Issue
                    |                           |
        1. Create branch             1. Describe the idea/problem
        2. Make changes              2. Tag relevant agents
        3. Commit & push             3. Discuss with team
        4. Open PR                   4. Once agreed, create PR
        5. Request reviews                  to implement
        6. Address feedback
        7. Merge when approved
```

## 🔄 Complete Workflow: From Draft to Published Guide

### Phase 1: Preparation (Issue or Discussion)
```
Start Here
    |
    v
Check to-edit-guides/ for available drafts
    |
    v
Pick a neighborhood guide to enhance
    |
    v
Optional: Create an Issue to claim it and discuss approach
    |
    v
Proceed to Phase 2
```

### Phase 2: Implementation (Pull Request)
```
Create feature branch
    |
    v
mkdir -p winter-2025/[neighborhood]
    |
    v
Move guide from to-edit-guides/ to winter-2025/[neighborhood]/
    |
    v
Enhance the content (make it Legendary!)
    |
    v
git add, commit, and push
    |
    v
Create Pull Request
    |
    v
Tag agents for review (@codex @claude @copilot)
    |
    v
Proceed to Phase 3
```

### Phase 3: Collaboration (Pull Request Review)
```
Team reviews your PR
    |
    v
Address feedback and comments
    |
    v
Make additional commits as needed
    |
    v
Request re-review if substantial changes
    |
    v
PR approved by team
    |
    v
Merge to main
    |
    v
🎉 Guide is published!
```

## 💡 Example Scenarios

### Scenario 1: Adding a New Guide
**You have:** A draft guide in `to-edit-guides/`

**What to do:**
1. ✅ Create a Pull Request
2. Create branch: `update/venice-beach-holiday-2025`
3. Move and organize the file
4. Enhance the content
5. Commit and push
6. Open PR with title: "Add Venice Beach Holiday Guide (Winter 2025)"
7. Tag: @codex @claude @copilot for review

**Don't:** Create an Issue first - you're ready to implement!

### Scenario 2: Found a Bug
**You noticed:** An event date is wrong in the Santa Monica guide

**What to do:**
1. ✅ Create a Pull Request (it's a quick fix!)
2. Create branch: `fix/santa-monica-event-date`
3. Edit the file with the correct date
4. Commit: "Fix event date in Santa Monica guide"
5. Open PR
6. Tag team for quick review

**Alternative:** If you can't fix it yourself, create a Bug Report Issue

### Scenario 3: Big Idea
**You want to:** Suggest adding video content to all guides

**What to do:**
1. ✅ Create an Enhancement Issue
2. Use the enhancement template
3. Describe your vision
4. Tag agents: @codex @claude @copilot @gemini-code-assist
5. Discuss feasibility and approach
6. Once agreed, someone creates a PR to implement

**Don't:** Start making changes without team alignment

### Scenario 4: Question
**You're wondering:** How should we cite sources?

**What to do:**
1. ✅ Create a Question Issue
2. Ask your question clearly
3. Tag relevant team members
4. Get answers and guidance
5. Apply learnings to your work

**Or:** Comment on the CONTRIBUTING.md PR for documentation questions

## 🤖 Agent-Specific Tips

### For AI Coding Agents (@copilot, @codex, @claude, @gemini-code-assist)

When tagged in an Issue:
- Provide technical insights
- Suggest implementation approaches
- Ask clarifying questions
- Collaborate with other agents

When tagged in a PR:
- Review code/content changes
- Check for consistency
- Suggest improvements
- Validate against guidelines

### Best Practices:
- Always read CONTRIBUTING.md first
- Use the templates provided
- Tag other agents for their expertise
- Be constructive and collaborative
- Remember: We're all Captains of this ship! ⛵

## 🎓 Learning from PR #1

PR #1 demonstrated a good workflow:
- ✅ Created a PR for adding content (not an Issue)
- ✅ Tagged multiple agents for review
- ✅ Included detailed description of changes
- ✅ Followed a clear branch naming convention

Key takeaway: If you're ready to make changes to files, go straight to a PR!

## 📚 Additional Resources

- [CONTRIBUTING.md](CONTRIBUTING.md) - Complete contribution guide
- [README.md](README.md) - Project overview
- [to-edit-guides/readme.md](to-edit-guides/readme.md) - Working with draft guides
- [.github/pull_request_template.md](.github/pull_request_template.md) - PR template
- [.github/ISSUE_TEMPLATE/](.github/ISSUE_TEMPLATE/) - Issue templates

## ❓ Still Confused?

Ask in an Issue! Tag @codex @claude @copilot and we'll help clarify.

Remember: **When in doubt, create a PR!** It's easier to convert a PR to an Issue than the other way around.

---

**Let's make these guides Legendary through Human x AI Collaboration!** ✨
