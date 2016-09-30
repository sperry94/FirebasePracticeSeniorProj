//firebase documents used as reference

firebase.auth().signInWithEmailAndPassword("test@test.com", "!Password1");

var testStringRef = firebase.database().ref("testStrings");
var scaffoldElement = document.getElementById("scaffold");

testStringRef.on("child_added", function(data){
    addToListOnPage(data.key, data.val());
});
testStringRef.on("child_removed", function(data){
    removeFromListOnPage(data.key);
});

document.getElementById("firebaseButton").addEventListener("click", addToFirebase);
document.getElementById("firebaseClearButton").addEventListener("click", clearFirebase);

function addToFirebase()
{
    var testStringEntry = testStringRef.push();
    var testStringNum = Math.random();

    testStringEntry.set(testStringNum.toString());
}

function clearFirebase()
{
    testStringRef.remove();
}

function addToListOnPage(idToAdd, valueToAdd)
{
    var currentHtml = scaffoldElement.innerHTML;
    scaffoldElement.innerHTML +=
            "<h5 id=" + idToAdd + ">" +
            valueToAdd +
            "</h5>";
}

function removeFromListOnPage(idToRemove)
{
    var elementToRemove = document.getElementById(idToRemove);
    scaffoldElement.removeChild(elementToRemove);
}
