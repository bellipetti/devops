// async1.js <-> async.html

//동기식프로그램 방식
console.log('first job');
for (let i = 1; i <= 10000; i++) {
    console.log('second ob');
}
console.log('third job');  //블록킹(대기) 상태에 빠짐   :원인은 싱글쓰레드 방식이기 때문
