import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import React,{Component} from 'react'
import { getSortedPostsData } from '../lib/posts'
import useSWR from 'swr'
import axios from 'axios'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function Profile() {

  const fetcher = async (url) => await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR('http://localhost:8090/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>{data.name}!</div>
}

class Home extends Component{

    constructor(props){
      super(props)
      this.state={
        showtip:false
      }
    }

    componentDidMount(){

        this._initData()

    }

    async _initData(){

        // const allPostsData = getSortedPostsData()

        // this.setState({
        //   allPostsData
        // })

    }

    showMsg(){
      this.setState({
        showtip:true
      })
    }

    render(){
      const showtip = this.state.showtip
      return (
        <Layout home>
        <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p>[Your Self Introduction]</p>
            <Link href="/posts/first-post">
              <p>
              <a>Next Pages Post</a>
              
            </p>
            </Link>
            <Profile />
            <button onClick={()=>this.showMsg()}>show tip</button>
          </section>
          {showtip && (<Alert type="error">The tips shows</Alert>)}

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {this.props.allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      )
    }

}

export default Home
