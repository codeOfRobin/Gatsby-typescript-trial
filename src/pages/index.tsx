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
      <MyComponent />
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
    super(props)

    this.state = {
      response: null
    }
  }

  getRequest = async () => {
    const data = await axios('https://httpbin.org/get', {
      transformResponse: [
        (data, _) => {
          data = JSON.parse(data)
          let newData = {
            userAgent: data.headers['User-Agent'],
            origin: data.origin,
            url: data.url
          }
          console.log(newData)
          return newData
        }
      ]
    })
    return data
  }

  componentDidMount() {
    this.getRequest().then(({ data }) => this.setState({ response: data }))
  }

  render() {
    let result = () => {
      if (this.state.response) {
        return this.state.response.url
      } else {
        return 'loading'
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
