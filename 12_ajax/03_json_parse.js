/*
    JSON.parse()
    JSON 포매스이 문자열(통신으로 받은 파일 or 텍스트)을 객체로 변환.
    서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이고, 이 문자열은 객체로 변환.
    JSON 포맷의 문자열을 객체화 하는 것을 역직렬화 deserializing.

    * 서버로 데이터를 전달할 때 : 객체를 Json 문자열로 바꾼 후 전송
    서버에서 데이터를 받을 떄 : Json 문자열을 받아서 처리를 위해 객체(객체배열)로 변경
 */
const obj = {
    name: 'John',
    age: 42,
    job: 'programmer',
    hobby: 'game'
};
const json = JSON.stringify(obj);
console.log(typeof json, json);

const parsedJson = JSON.parse(json);
console.log(typeof parsedJson, parsedJson);


const todos =[
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: false},
    {id: 3, content: 'Javascript', completed: false},
];

const todosJson = JSON.stringify(todos);
console.log(typeof todosJson, todosJson);
const todoJsonParse = JSON.parse(todosJson);
console.log(typeof todoJsonParse, todoJsonParse);



