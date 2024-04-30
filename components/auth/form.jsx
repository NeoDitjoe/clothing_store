import convertImage from '@/util/image-to-base64/covert-image'
import style from './form.module.css'
import { signInHandler, signUpHandler } from './handlers'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function AuthForm() {

  const router = useRouter()
  const isSignUp = router.asPath.split('/').includes('sign-up')

  const { data: session, loading } = useSession()
  if(session && !loading){
    router.push('/')
    return <p>Redirecting...</p>
  }

  return (
    <div className='flex flex-row'>

      <form onSubmit={isSignUp ? signUpHandler : signInHandler} className={`flex flex-col md:m-5 m-1 justify-center min-w-[17em] ${style.form}`}>
        <input type='email' placeholder='Enter Email' required name='email' />
        <input type='password' placeholder='Enter Password' required name='password' />
        {isSignUp
          && <div>
              <label>Profile Image</label>
              <input className='cursor-pointer' type='file' name='image' onChange={convertImage} />
          </div>
        }
        <button className='text-green-400 font-bold hover:text-black'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>

        <p
          className='text-center cursor-pointer hover:text-blue-300 mt-10'
          onClick={() => router.push(isSignUp ? '/auth/sign-in' : '/auth/sign-up')}
        >{isSignUp ? 'Have An Account ?' : "Create Account ?"}</p>
      </form>

      <div className={style.background}></div>
    </div>
  )
}