function a(){
    var a=10;
    b();
    function b(){
        console.log(a);
    }
}
a();