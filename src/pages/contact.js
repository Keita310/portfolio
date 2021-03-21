import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ location }) => {

  // 送信用データ
  const [params, setParams] = useState({
   'name': '',
   'email': '',
   'message': '',
   'subject': 'お問い合わせ',
   'form-name': 'contact',
   'bot-field': true,
 });

  const handleChange = event => {
    let newParams = {...params}
    newParams[event.target.name] = event.target.value
    setParams(newParams)
  };

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const onSubmit = (event) => {
    event.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(params)
    })
      .then(() => console.log("お問い合わせ成功しました"))
      .catch(() => console.log("お問い合わせに失敗しました"))
  }

  return (
    <Layout location={location}>
      <SEO title="お問い合わせ" />
      <h1>お問い合わせ</h1>

      <Form
        netlify
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
      >
        <Form.Group controlId="name">
          <Form.Label>お名前</Form.Label>
          <Form.Control
            name="name"
            type="text"
            onChange={handleChange}
            value={params.name}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={handleChange}
            value={params.email}
            required
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>問い合わせ内容</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            onChange={handleChange}
            value={params.message}
            required
          />
        </Form.Group>

        <Button
          type="submit"
        >
          送信
        </Button>

      </Form>

    </Layout>
  )

}

export default Contact