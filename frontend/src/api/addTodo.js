const API_URL = `http://localhost:4000`

export const addTodo = async (title, description) => {
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    // let obj = { 
    //     type: String,
    //     required: true
    //  }
    const response = await fetch(`${API_URL}/todos/item`, {
        // method type?
        method: 'POST',
        // sending body, stringify data
        // body: JSON.stringify(),
        // content type?
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ 
            tit: title,
            dsc: description
        })
    })
    const json = await response.json()
    return json
}
