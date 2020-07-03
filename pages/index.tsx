import Link from 'next/link'
import { attributes, react as HomeContent } from '../content/home.md';

const { title, cats } = attributes;

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <article>
      <h1>{title}</h1>
      <HomeContent />
      <ul>
        {cats.map((cat: any, k: any) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </article>
    <Link href="/about">
      <a>About</a>
    </Link>
  </>
)

export default IndexPage
