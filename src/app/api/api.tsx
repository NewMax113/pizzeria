import axios from "axios";

async function testtt() {
    let test2 = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return test2.data
}

async function testtt2() {
    let test2 = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
            id,
        },
    })
    return test2
}

export default testtt