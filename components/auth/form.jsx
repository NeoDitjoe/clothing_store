import style from './form.module.css'

export default function AuthForm() {
  return (
    <div className='flex flex-row'>

      <form className={`flex flex-col m-5 justify-center ${style.form}`}>
        <input type='email' placeholder='Enter Email' required name='email' />
        <input type='password' placeholder='Enter Password' required name='password' />
        <label>Profile Image</label>
        <input className='cursor-pointer' type='file' placeholder='ff' name='profile' />
        <button className='text-green-400 font-bold hover:text-black'>Sign Up</button>
      </form>

      <div className={style.background}></div>
    </div>
  )
}