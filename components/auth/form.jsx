import convertImage from '@/util/image-to-base64/covert-image'
import style from './form.module.css'
import postMethod from '@/util/database/post-method'

export default function AuthForm() {

  async function signUpHandler(e){
    e.preventDefault()
    const formData = new FormData(e.target)

    const image = localStorage.getItem('profile-image')
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const res = await postMethod('/api/auth/sign-up' , {image, email: email.toLocaleLowerCase(), password})

      if(res.message === 'success'){
        alert('success')
      }

    } catch (error) {
      alert(error.message)
    }
  }


  return (
    <div className='flex flex-row'>

      <form onSubmit={signUpHandler} className={`flex flex-col md:m-5 m-1 justify-center ${style.form}`}>
        <input type='email' placeholder='Enter Email' required name='email' />
        <input type='password' placeholder='Enter Password' required name='password' />
        <label>Profile Image</label>
        <input className='cursor-pointer' type='file' name='image' onChange={convertImage} />
        <button className='text-green-400 font-bold hover:text-black'>Sign Up</button>
      </form>

      <div className={style.background}></div>
    </div>
  )
}