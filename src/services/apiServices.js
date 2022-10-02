

const URL = 'https://frontend-take-home.fetchrewards.com/form';


const getOccAndStates = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return (data);
}

const submitCompletedForm = async (data) => {
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
    });
}


export {
    getOccAndStates,
    submitCompletedForm
}