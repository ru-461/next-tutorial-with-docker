import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, everyone.</p>
        <p>
          This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
        <p>
          The code for this site is available{' '}
          <a href="https://github.com/ryu-461/next-tutorial-with-docker">
            here
          </a>
          .
        </p>
      </section>
    </Layout>
  )
}

export default Home
