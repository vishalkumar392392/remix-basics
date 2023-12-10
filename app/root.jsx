import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from "./styles/main.css";
import MainNavigation from "./components/MainNavigation";
import { links as noteLinks } from "./components/NewNote";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{caughtResponse.statusText}</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error">
          <h1>{caughtResponse.statusText}</h1>
          <p>{caughtResponse.data?.message || "An error occured.."}</p>
          <p>
            Back to <Link to="/"> Safety </Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred from error boundary!</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error">
          <h1>An error occurred error boundary!</h1>
          <p>{error.message}</p>
          <p>
            Back to <Link to="/"> Safety </Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [...noteLinks(), { rel: "stylesheet", href: styles }];
}
