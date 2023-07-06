import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import { useEffect, useState } from "react"
import useInput from "../../hooks/useInput"
import { register } from "../../services/api"

const RegisterForm = () => {
    const { value, handleOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    return (
        <Container>
            <InputGroup
                id="username"
                name="username"
                type="text"
                placeholder="사용자 이름을 입력해주세요"
                label="이름"
                value={value.username}
                onChange={handleOnChange}>
            </InputGroup>

            <InputGroup
                id="email"
                name="email"
                type="email"
                placeholder="이메일(아이디)를 입력해주세요"
                label="이메일"
                value={value.email}
                onChange={handleOnChange}>
            </InputGroup>

            <InputGroup
                id="password"
                name="password"
                type="password"
                placeholder="***********"
                label="비밀번호"
                value={value.password}
                onChange={handleOnChange}>
            </InputGroup>

            <InputGroup
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="***********"
                label="비밀번호 확인"
                value={value.passwordConfirm}
                onChange={handleOnChange}>
            </InputGroup>

            <Button
                onClick={() => {
                    //회원가입 요청
                    register({
                        email: value.email,
                        password: value.password,
                        username: value.username,
                    })
                }}>회원가입</Button>
        </Container>
    )
}

export default RegisterForm;