import { SignInCont, SignInEnter, SignInGroup, SignInInput, SignInLogin, SignInBlock, SignInModal, SSignIn } from "./SignIn.styled";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
<SSignIn>
        <SignInCont>
            <SignInModal>
				<SignInBlock>
					<div>
						<h2>Регистрация</h2>
					</div>
					<SignInLogin id="formLogUp" action="#">
						<SignInInput type="text" name="first-name" id="first-name" placeholder="Имя" />
						<SignInInput type="text" name="login" id="loginReg" placeholder="Эл. почта" />
						<SignInInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
						<SignInEnter id="SignUpEnter"><Link to="/">Зарегистрироваться</Link></SignInEnter>
						<SignInGroup>
							<p>Уже есть аккаунт?  <Link to="/sign-in">Войдите здесь</Link></p>
						</SignInGroup>
					</SignInLogin>
				</SignInBlock>
			</SignInModal>
        </SignInCont>
    </SSignIn>
    );
}

export default SignUp;