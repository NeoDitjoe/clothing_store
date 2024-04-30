export default function convertImage(e) {
  e.preventDefault()

  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = () => {
    console.log(reader.result)
    localStorage.setItem("profile-image", reader.result);
  }

  reader.onerror = error => {
    console.log('Error: ', error)
  }
}