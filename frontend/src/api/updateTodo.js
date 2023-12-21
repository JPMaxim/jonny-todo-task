const API_URL = `http://localhost:4000`

export const updateTodo = async (todo) => {
    
    const response = await fetch(`${API_URL}/todos/item/${todo._id}/${todo.text}`, {
        // what method?
        method: 'PATCH',
        // type of content?
        headers: {
            'Content-Type': "application/json"
        },
        // body updated the "text" in your model with the text you sent in the body
        // body: JSON.stringify({
        //     text: todo.text
        // })
    })
    const json = await response.json()
    return json
}