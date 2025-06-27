// JSON replacer 예
// 값의 타입이 Number이면 필터링 되어 반환되지 않는다.
const obj = {
    name: 'John',
    age: 42,
    job: 'programmer',
    hobby: 'game'
};

function filter(key,value){
    // undefined: 반환하지 않음
    return typeof value ==='number' ? undefined: value;
}
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);

// JSON.stringify() 메서드는 객체 뿐만 아니라 배열에서도 JSON 포멧의 문자열로 변환
const todos =[
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: false},
    {id: 3, content: 'Javascript', completed: false},
];
const jsonArray = JSON.stringify(todos,null,2);
console.log(typeof jsonArray, jsonArray);