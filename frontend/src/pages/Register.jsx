import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Register = () => {
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
              <h2>Регистрация</h2>

              <Form.Control type="text" placeholder="ФИО" />
              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Пароль" />
              <Button variant="primary" type="submit">
                Зарегистрироваться
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

export default Register;
