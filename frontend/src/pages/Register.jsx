import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } =
    useContext(AuthContext);
  return (
    <>
      <Form onSubmit={registerUser}>
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

              <Form.Control
                type="text"
                placeholder="ФИО"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Пароль"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <Button variant="primary" type="submit">
                {isRegisterLoading ? "Создание аккаунта" : "Зарегистрировать"}
              </Button>
              {registerError?.error && (
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
                    {registerError?.message}
                  </p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
