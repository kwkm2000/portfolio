// import Link from 'next/link'
import Layout from '../components/Layout'
import { attributes, react as HomeContent } from '../content/home.md';

const { title, cats } = attributes;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
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
  </Layout>
)

export default IndexPage
