import React from "react";
import Container from "../../containers/container/Container";

function RegisterForm() {
  return (
    <Container>
      <form>
        <label>Name:</label> <input type="text" name="name" />
      </form>
    </Container>
  );
}

export default RegisterForm;
