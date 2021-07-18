import Input from 'common/components/Input/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import './signin.scss'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from 'features/User/redux/selectors/userSelectors'
import { signIn } from 'features/User/redux/slices/userSlice'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ROUTES from 'common/constants/paths'
import Alert from 'common/components/Alert/Alert'

const schema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.')
})

const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    isUserFetching,
    userLoggedSuccess,
    userLoggedFail,
    userSuccessRegistered
  } = useSelector(userSelector)

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: 'ruben',
      password: 'holamundo'
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(signIn(data))
  }

  useEffect(() => {
    if (userLoggedSuccess) {
      history.push(ROUTES.DASHBOARD)
    }
  }, [userLoggedSuccess])

  return (
    <div className="wrap-signIn">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
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
        <Button
          disabled={isUserFetching}
          size="large"
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        {userLoggedFail && (
          <Alert severity="error">Username or password are incorrects!</Alert>
        )}
        {userSuccessRegistered && (
          <Alert severity="success">
            User correctly registered!. Please sign in.
          </Alert>
        )}
      </form>
    </div>
  )
}

export default SignIn
