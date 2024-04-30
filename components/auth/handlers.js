import postMethod from "@/util/database/post-method"
import { signIn } from 'next-auth/react';

export async function signUpHandler(e) {
  e.preventDefault()
  const formData = new FormData(e.target)

  const image = localStorage.getItem('profile-image')
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const res = await postMethod('/api/auth/sign-up', { image, email: email.toLocaleLowerCase(), password })

    if (res.message === 'success') {
      alert('success')
    }

  } catch (error) {
    alert(error.message)
  }
}

export async function signInHandler(e) {
  e.preventDefault()

  const formData = new FormData(e.target)

  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const response = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });

    if (response.ok) {
      alert('logged in')
    }

    if (!response.ok) {
      alert(response.error)
    }
  } catch (error) {
    console.log(error)
  }
}