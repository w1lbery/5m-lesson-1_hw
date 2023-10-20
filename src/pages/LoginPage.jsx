import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		//
      navigate("/posts")
	}
	return (
		<div>LoginPage
		<form onClick={handleSubmit}>
				<input type="text" placeholder="login" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
			</form>
		</div>
	)
}

export default LoginPage


