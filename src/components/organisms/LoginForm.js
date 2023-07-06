import Container from "../atoms/Container"
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button"
import Title from "../atoms/Title"
import useInput from "../../hooks/useInput"
import { login } from "../../services/api"

const LoginForm = () => {
    const { value, handleOnChange } = useInput({
        email: "",
        password: "",
    })


    return (
        <Container>
            <Title>
                로그인
            </Title>
            <InputGroup id="email" name="email" type="email" placeholder="이메일(아이디)를 입력해주세요" label="이메일"
                value={value.email}
                onChange={handleOnChange}></InputGroup>
            <InputGroup id="password" name="password" type="password" placeholder="***********" label="비밀번호"
                value={value.password}
                onChange={handleOnChange}></InputGroup>
            <Button
                onClick={() => {
                    // 로그인 요청
                    login({
                        email: value.email,
                        password: value.password,
                    })
                }}>로그인</Button>
        </Container>
    )
}

export default LoginForm;