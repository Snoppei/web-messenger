import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
            paddingBottom: "10%",
          }}
        >
          <Col xs={5}>
            <Stack gap={3}>
              <h2>Авторизация</h2>

              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Пароль" />
              <Button variant="primary" type="submit">
                Войти
              </Button>

              <Alert
                variant="danger"
                style={{
                  padding: "10px",
                }}
              >
                <p
                  style={{
                    marginBottom: "0",
                  }}
                >
                  Возникла ошибка
                </p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
