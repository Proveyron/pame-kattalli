# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/56a00347-d848-4e72-b00d-d46ab15b6cef

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/56a00347-d848-4e72-b00d-d46ab15b6cef) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/56a00347-d848-4e72-b00d-d46ab15b6cef) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deploy no GitHub Pages

Este repositório inclui workflow em `.github/workflows/deploy-pages.yml` para build e publicação automática no branch `gh-pages` ao fazer push em `main`, `master` ou `work`.

Checklist no GitHub:

1. Vá em **Settings → Pages**.
2. Em **Source**, selecione **Deploy from a branch**.
3. Em **Branch**, selecione `gh-pages` e pasta `/(root)`.
4. Faça push em `main`, `master` ou `work` para disparar o workflow.
5. Confira na aba **Actions** se o job "Deploy to GitHub Pages" concluiu com sucesso e se o branch `gh-pages` foi atualizado.

Se aparecer erro `404` para `main.tsx` ou `favicon.png`, normalmente o Pages ainda está apontando para a branch errada (ex.: `main` root).

URL final esperada:

`https://<seu-usuario>.github.io/pame-kattalli/`
