import React, { Fragment as F } from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

import axios from 'axios'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
      <MyComponent></MyComponent>
    </Page>
  </IndexLayout>
)

// logo.clearbit.com/spotify.com?size=80&greyscale=true

interface HTTPBinResult {
  userAgent: String
  origin: String
  url: String
}

type State = {
  response?: HTTPBinResult
}

class MyComponent extends React.Component<{}, State> {

  constructor(props: object) {
    super(props);

    this.state = {
      response: null
    }
  }

  getRequest = async () => {
    const data = await axios('https://httpbin.org/get', {
      // @ts-ignore
      transformResponse: [...axios.defaults.transformResponse, (data, _) => {
        console.log('>>>>>>>>>>>', data)
        // data = data.data
        let newData = {
          userAgent: data.headers["User-Agent"],
          origin: data.origin,
          url: data.url
        }
        console.log(newData)
        return newData;
      }]
    })
    return data;
  }

  componentDidMount() {
    // @ts-ignore
    this.getRequest().then(getResponse => this.setState({ response: getResponse }))
  }

  render() {
    let result = () => {
      if (this.state.response) {
        // @ts-ignore
        console.log(`🤬 ${JSON.stringify(this.state.response.data)}`)
        // @ts-ignore
        return this.state.response.data.url
      } else {
        return "loading"
      }
    }
    return (
      <F>
        <img src="https://logo.clearbit.com/spotify.com?size=80&greyscale=true" />
        <div>{result()}</div>
      </F>
    )
  }
}

export default IndexPage
