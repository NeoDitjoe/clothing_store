import postMethod from "../database/post-method"

export default async function addToCartHandler(loading, session, image, name, price, qtyValue, router) {

  if (!loading && session) {
    const body = {
      image: image[0],
      name,
      price,
      email: session?.user.email,
      qty: qtyValue

    }

    try {
      const res = await postMethod('/api/cart/add-to-cart', body)
      if (res.message === 'success') {
        alert('success')
      }
    } catch (error) {
      alert(error.message)
    }

  } else {
    alert('please log in ')
    router.push('/auth/sign-in')
  }
}