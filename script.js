async function loaded(reader) {
    const response = await fetch('https://hf.space/embed/jph00/pets/+/api/predict/', {
      method: "POST", body: JSON.stringify({ "data": [reader.result] }),
      headers: { "Content-Type": "application/json" }
    });
    const json = await response.json();
    const label = json['data'][0]['confidences'][0]['label'];
    results.innerHTML = `<br/><img src="${reader.result}" width="300"> <p>${label}</p>`
  }
  function read() {
    const reader = new FileReader();
    reader.addEventListener('load', () => loaded(reader))
    reader.readAsDataURL(photo.files[0]);
  }
  photo.addEventListener('input', read);