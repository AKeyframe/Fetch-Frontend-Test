

const URL = 'https://frontend-take-home.fetchrewards.com/form';


const getOccAndStates = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return (data);
}

const submitCompletedForm = async (data) => {
    await fetch(URL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
}


export {
    getOccAndStates,
    submitCompletedForm
}