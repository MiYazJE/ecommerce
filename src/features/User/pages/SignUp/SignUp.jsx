import Input from 'common/components/Input/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import './../SignIn/signin.scss'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from 'features/User/redux/selectors/userSelectors'
import { signUp } from 'features/User/redux/slices/userSlice'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ROUTES from 'common/constants/paths'
import { STRONG_PASSWORD_REGEX } from 'features/User/constants/forms'

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string()
    .required('Password is required.')
    .matches(
      STRONG_PASSWORD_REGEX,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  repeatPassword: Yup.string()
    .required('RepeatPassword is required.')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
})

const SignUp = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { isUserFetching, userSuccessRegistered } = useSelector(userSelector)

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(signUp(data))
  }

  useEffect(() => {
    if (userSuccessRegistered) {
      history.push(ROUTES.SIGN_IN)
    }
  }, [userSuccessRegistered])

  return (
    <div className="wrap-signIn">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <Input
          {...register('username')}
          name="username"
          placeholder="Enter your username"
          error={!!errors?.username}
          helperText={errors?.username?.message}
        />
        <Input
          {...register('password')}
          name="password"
          type="password"
          placeholder="Enter your password"
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />
        <Input
          {...register('repeatPassword')}
          name="repeatPassword"
          type="password"
          placeholder="Repeat your password"
          error={!!errors?.repeatPassword}
          helperText={errors?.repeatPassword?.message}
        />
        <Button
          disabled={isUserFetching}
          size="large"
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUp
