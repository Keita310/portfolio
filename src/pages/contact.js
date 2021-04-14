import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Contact = ({ location }) => {

  // 画面の状態管理
  const DISPLAYS = {
    INPUT: 1,
    CONFIRM: 2,
    FINISH: 3,
    FAIL: 4,
  }
  const [display, setDisplay] = useState(DISPLAYS.INPUT)

  // 送信用データ
  const [params, setParams] = useState({
   'name': '',
   'email': '',
   'message': '',
   'subject': '[portfolio]お問い合わせ',
   'form-name': 'contact',
  })
  const handleChange = event => {
    let newParams = {...params}
    newParams[event.target.name] = event.target.value
    setParams(newParams)
  };

  // 確認画面へ
  const confirm = (event) => {
    event.preventDefault()
    setDisplay(DISPLAYS.CONFIRM)
  }

  // お問い合わせ送信
  const submit = (event) => {
    event.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(params)
    })
      .then(() => setDisplay(DISPLAYS.FINISH))
      .catch(() => setDisplay(DISPLAYS.FAIL))
  }
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  // お問い合わせ入力画面
  const inputHtml = (
    <>
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
      <Form.Group controlId="subject" className="d-none">
        <Form.Label>件名</Form.Label>
        <Form.Control
          name="subject"
          type="text"
          onChange={handleChange}
          value={params.subject}
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
        確認
      </Button>
    </>
  )

　// お問い合わせ確認画面
  const confirmHtml = (
    <>
      <Form.Group controlId="name">
        <Form.Label>お名前</Form.Label>
        <div>{params.name}</div>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>メールアドレス</Form.Label>
        <div>{params.email}</div>
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>問い合わせ内容</Form.Label>
        <div>{params.message}</div>
      </Form.Group>

      <Button
        type="submit"
      >
        送信
      </Button>
    </>
  )

  // 送信完了画面
  const finishHtml = (
    <>
      完了しました
    </>
  )

  // エラー画面
  const failHtml = (
    <>
      送信失敗しました
    </>
  )

  // 表示物出しわけ
  let formInnter, action;
  switch (display) {
    case DISPLAYS.INPUT:
      formInnter = inputHtml
      action = confirm
      break

    case DISPLAYS.CONFIRM:
      formInnter = confirmHtml
      action = submit
      break

    case DISPLAYS.FINISH:
      formInnter = finishHtml
      break

    case DISPLAYS.FAIL:
      formInnter = failHtml
      break
  }

  return (
    <Layout location={location}>
      <SEO title="お問い合わせ" />
      <div className="eyecatch">
        <h1 className="opacity-70">お問い合わせ</h1>
        <Image filename="works_bg.png" alt="お問い合わせ" />
      </div>

      <Form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={action}
      >
        <input type="hidden" name="bot-field" />
        {formInnter}
      </Form>
    </Layout>
  )

}

export default Contact