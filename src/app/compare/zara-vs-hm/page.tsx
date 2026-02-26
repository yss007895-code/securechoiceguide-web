import { redirect } from 'next/navigation';

export const metadata = {};

export default function Page() {
  redirect('/compare/1password-vs-bitwarden');
}
